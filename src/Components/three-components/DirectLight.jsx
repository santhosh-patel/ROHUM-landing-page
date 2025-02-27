import React, { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const DirectLight = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 1, "red");

  return <directionalLight intensity={3} ref={lightRef} position={[5, 5, 5]} />;
};

export default DirectLight;
