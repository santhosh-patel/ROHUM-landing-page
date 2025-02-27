import React, { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const SpotLight = () => {
  const lightRef = useRef();
  useHelper(lightRef, SpotLightHelper, 1, "red");
  return (
    <spotLight
      intensity={500}
      ref={lightRef}
      position={[5, 5, 5]}
      color={"#a78bfa"}
      angle={0.3}
      penumbra={0.5}
      castShadow
    />
  );
};

export default SpotLight;
