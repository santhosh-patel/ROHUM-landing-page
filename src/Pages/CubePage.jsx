import React from "react";
import CubeModel from "../Components/Cube";

const CubePage = () => {
  return (
    <div className="border min-h-screen p-2 w-full">
      <div className="w-3/5 h-screen border">
        <CubeModel />
      </div>
    </div>
  );
};

export default CubePage;
