import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useVideoTexture, OrbitControls } from "@react-three/drei";
import DirectLight from "./three-components/directLight";
import SpotLight from "./three-components/SpotLight";

// https://chatgpt.com/c/67bfca81-fe80-8007-aba5-d585bf24df2a

const CubeModel = () => {
  return (
    // <div>
    <Canvas shadows={true} fallback={<div>Sorry no WebGL supported!</div>}>
      <ambientLight intensity={5} />
      {/* <DirectLight /> */}
      {/* <SpotLight /> */}
      <Cube />
      <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} />
    </Canvas>
    // </div>
  );
};
export default CubeModel;

const Cube = () => {
  const videoTexture1 = useVideoTexture("/cubeFacesVid/face1.mp4");
  const videoTexture2 = useVideoTexture("/cubeFacesVid/face2.mp4");
  const videoTexture3 = useVideoTexture("/cubeFacesVid/face3.mp4");
  const videoTexture4 = useVideoTexture("/cubeFacesVid/face4.mp4");
  const videoTexture5 = useVideoTexture("/cubeFacesVid/face4.mp4");
  const videoTexture6 = useVideoTexture("/cubeFacesVid/face4.mp4");

  return (
    <mesh
      onPointerOver={(e) => console.log("Hovered on:", e.face.materialIndex)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={videoTexture1} attach="material-0" />
      <meshStandardMaterial map={videoTexture2} attach="material-1" />
      <meshStandardMaterial map={videoTexture3} attach="material-2" />
      <meshStandardMaterial map={videoTexture4} attach="material-3" />
      <meshStandardMaterial map={videoTexture5} attach="material-4" />
      <meshStandardMaterial map={videoTexture6} attach="material-5" />
    </mesh>
  );
};
