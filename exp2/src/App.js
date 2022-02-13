import ReactDOM from "react-dom";
import { Canvas, useThree } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import "./App.css";
import * as THREE from "three";
import { FontLoader } from "../node_modules/three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three";
import Shrikhand from "./Shrikhand_Regular.json";

export default function App() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/sea.MOV";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    return vid;
  });
  // Keep in mind videos can only play once the user has interacted with the site ...
  // useEffect(() => void video.play(), [video]);

  const handleClick = () => {
    void video.play();
  };

  const font = new FontLoader().parse(Shrikhand);

  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  const geometry = new TextGeometry("Hello three.js!", {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  return (
    <Canvas
      camera={{
        fov: 70,
        position: [0, 2, 14],
      }}
    >
      <mesh onClick={handleClick}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshNormalMaterial>
        <OrbitControls />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        {/* <planeGeometry args={[10, 20, 1, 15]} /> */}
        {/* <MeshWobbleMaterial /> */}
        {/* <TextGeometry attach="geometry" args={["three.js", textOptions]} /> */}
      </mesh>
    </Canvas>
  );
}
