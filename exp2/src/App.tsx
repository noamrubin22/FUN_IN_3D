import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function App() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/sea.MOV";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    return vid;
  });
  // Keep in mind videos can only play once the user has interacted with the site ...
  // useEffect(() => void video.play(), [video]);

  const handleClick = () => {
    void video.play();
  };

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh onClick={handleClick}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} color="red" />
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
          <OrbitControls />
        </mesh>
      </Canvas>
    </div>
  );
}
