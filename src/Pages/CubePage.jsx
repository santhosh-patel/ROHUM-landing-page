import React, { useState } from "react";
import CubeModel from "../Components/Cube";
import CubeInfo from "../Components/CubeInfo";

const CubePage = () => {
  const [visibleFace, setVisibleFace] = useState(0);
  const [Ishoverd, setIshoverd] = useState(false);
  const [isLoading, setisLoading] = useState(false); // use this to addd a traditional loader to model
  return (
    <div className=" text-[var(--foreground)] relative lg:mt-10 flex md:flex-row flex-col justify-center items-center lg:min-h-[130vh] min-h-[120vh] p-2 w-full">
      <div className="absolute top-0 h-full bg-white/50 w-full bg-[radial-gradient(#ffffff33_1px,#000000FF_1px)] bg-[size:20px_20px]"></div>
      <div className="w-full h-[65vh] md:w-[45%] md:h-[50vh] lg:w-[50%] lg:h-screen">
        <CubeModel
          visibleFace={visibleFace}
          setVisibleFace={setVisibleFace}
          Ishoverd={Ishoverd}
          setIshoverd={setIshoverd}
        />
      </div>
      <CubeInfo visibleFace={visibleFace} Ishoverd={Ishoverd} />
    </div>
  );
};

export default CubePage;
