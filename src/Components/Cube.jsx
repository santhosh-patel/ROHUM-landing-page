import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useVideoTexture, OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// https://chatgpt.com/c/67bfca81-fe80-8007-aba5-d585bf24df2a

const CubeModel = ({ visibleFace, setVisibleFace, Ishoverd, setIshoverd }) => {
  const [stopRotate, setstopRotate] = useState(false);
  return (
    <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <Cube
        stopRotate={stopRotate}
        setstopRotate={setstopRotate}
        Ishoverd={Ishoverd}
        setIshoverd={setIshoverd}
        setVisibleFace={setVisibleFace}
        visibleFace={visibleFace}
      />
      <OrbitControls
        autoRotate={!stopRotate}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};
export default CubeModel;

const Cube = ({
  Ishoverd,
  setIshoverd,
  setVisibleFace,
  visibleFace,
  stopRotate,
  setstopRotate,
}) => {
  const cubeRef = useRef();

  // AI generated code. I dont have an idea of what's happening here. But this useFrame section here just determines which face is facing the user
  useFrame(({ camera }) => {
    if (!cubeRef.current) return;

    const normals = [
      { name: 0, vector: new THREE.Vector3(0, 0, 1) },
      { name: 1, vector: new THREE.Vector3(0, 0, -1) },
      { name: 2, vector: new THREE.Vector3(0, 1, 0) },
      { name: 3, vector: new THREE.Vector3(0, -1, 0) },
      { name: 4, vector: new THREE.Vector3(1, 0, 0) },
      { name: 5, vector: new THREE.Vector3(-1, 0, 0) },
    ];

    const worldMatrix = cubeRef.current.matrixWorld;
    let maxDot = -Infinity;
    let currentFace = "";

    normals.forEach(({ name, vector }) => {
      const worldNormal = vector.clone().applyMatrix4(worldMatrix).normalize();
      const dotProduct = worldNormal.dot(camera.position.clone().normalize());

      if (dotProduct > maxDot) {
        maxDot = dotProduct;
        currentFace = name;
      }
    });
    if (currentFace !== visibleFace) {
      setVisibleFace(currentFace);
    }
  });

  const videoTexture1 = useVideoTexture("/cubeFacesVid/face1.mp4");
  const videoTexture2 = useVideoTexture("/cubeFacesVid/face2.mp4");
  const videoTexture3 = useVideoTexture("/cubeFacesVid/face3.mp4");
  const videoTexture4 = useVideoTexture("/cubeFacesVid/face4.mp4");
  const videoTexture5 = useVideoTexture("/cubeFacesVid/face5.mp4");
  const videoTexture6 = useVideoTexture("/cubeFacesVid/face6.mp4");

  return (
    <mesh
      onPointerOver={(e) => {
        setIshoverd(true);
        setstopRotate(true);
      }}
      ref={cubeRef}
      onPointerLeave={() => setstopRotate(false)}
    >
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture1}
        attach="material-0"
      />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture2}
        attach="material-1"
      />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture3}
        attach="material-2"
      />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture4}
        attach="material-3"
      />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture5}
        attach="material-4"
      />
      <meshPhysicalMaterial
        metalness={0}
        roughness={0}
        map={videoTexture6}
        attach="material-5"
      />
    </mesh>
  );
};
