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
  const videoTexture = useVideoTexture("/gitTUT.mp4");

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={videoTexture} />
    </mesh>
  );
};
