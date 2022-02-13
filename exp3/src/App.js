import "./App.css";
import { Distortion } from "./components/Distortion";
import * as box from "./components/Box";
import * as THREE from "three";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Camera } from "three";

function App() {
  // let audio = new Audio("/infinity.mp3");

  // const startAudio = () => {
  //   audio.play();
  // };

  // document.body.addEventListener("click", () => {
  //   startAudio();
  //   console.log("audio should play");
  // });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  // const audioLoader = new THREE.AudioLoader();
  // audioLoader.load("/infinity.mp3", function (buffer) {
  //   sound.setBuffer(buffer);
  //   sound.setLoop(true);
  //   sound.setVolume(0.5);
  //   sound.play();
  // });
  // https://github.com/mrdoob/three.js/blob/master/examples/webaudio_visualizer.html

  return (
    <div className="App">
      <div id="container">
        <Distortion text={"forgive me 4 analysing "} speed={0.5} />
        <Distortion text={"that is just my nature"} speed={0.6} />
      </div>
      {/* <ReactP5Wrapper sketch={box.sketch} rotation={16} /> */}
    </div>
  );
}

export default App;
