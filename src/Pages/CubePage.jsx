import React, { useState } from "react";
import CubeModel from "../Components/Cube";
import CubeInfo from "../Components/CubeInfo";

const CubePage = () => {
  const [visibleFace, setVisibleFace] = useState(0);

  const [isLoading, setisLoading] = useState(false); // use this to addd a traditional loader to model
  return (
    <div className=" text-[var(--foreground)] relative lg:mt-10 flex items-center min-h-[130vh] p-2 w-full">
      <div className="absolute top-0 h-full bg-white/20 w-full bg-[radial-gradient(#ffffff33_1px,#000000FF_1px)] bg-[size:20px_20px]"></div>
      <div className="w-[50%] h-screen">
        <CubeModel visibleFace={visibleFace} setVisibleFace={setVisibleFace} />
      </div>
      <CubeInfo visibleFace={visibleFace} />
    </div>
  );
};

export default CubePage;
