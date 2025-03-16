import React from "react";
import Circles from "../Components/Circles";

const Cta = () => {
  return (
    <div className="min-h-screen lg:h-[150vh] relative flex justify-center items-center pt-12 overflow-hidden">
      <Circles />
      <div className="fade-gradient top-0 left-0 absolute h-full w-full "></div>
      <div className="z-20">
        <h1 className="metalic-text text-4xl text-[var(--purple-foreground)] md:text-6xl xl:text-7xl pb-2 font-semibold text-center">
          Bring Your AI Avatar
        </h1>
        <h1 className="metalic-text text-4xl text-[var(--purple-foreground)] md:text-6xl xl:text-7xl font-semibold text-center mb-1">
          to Life!{" "}
        </h1>
        <div className="flex justify-center mt-5">
          <button className="border font-semibold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient p-4 border-white/70 hover:-translate-y-2 duration-300 active:scale-90 text-lg rounded-full px-8 bg-black backdrop-blur-[2px]">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
