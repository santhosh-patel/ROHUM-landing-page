import React from "react";
// import chipSvg from "../assets/chip.png";
// import brainSvg from "../assets/brain.png";
import bot from "../assets/bot.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-2">
      <div className="relative h-screen w-full flex justify-center items-center">
        {/* <div className="absolute bottom-0 -left-2 right-0 top-0 bg-[linear-gradient(to_right,#581c87_1px,transparent_1px),linear-gradient(to_bottom,#581c87_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

        <div className="absolute bottom-0 left-0 dark:bg-[#581c87] right-0 top-0 md:dark:[mask-image:radial-gradient(30%_40%_at_50%_35%,black,transparent)] "></div>

        <div className="z-10 w-full mb-[20vh] md:mb-[10vh] lg:mb-0 lg:mt-24 md:w-3/4 lg:w-2/3 ">
          <h1 className="text-4xl md:text-6xl xl:text-8xl text-center font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient pb-3">
            World's First AI <br /> Avatar Agent
          </h1>
          <div>
            <h3 className="font-medium text-sm w-3/4 mx-auto lg:mt-4 text-center md:text-md xl:text-xl text-[var(--foreground)] ">
              World class AI Agents with Robotics-as-a-Service [ RAAS ]
            </h3>
            <p className="hidden md:block text-[8px] md:text-[10px] w-3/4 xl:text-sm mx-auto text-center text-gray-500 my-1 lg:max-w-xl">
              We are transforming user interactions by integrating emotionally
              intelligent avatars into digital platforms, simplifying complex
              concepts like{" "}
              <span className="text-[var(--purple-foreground)]">
                CryptoCurrency
              </span>
              ,{" "}
              <span className="text-[var(--purple-foreground)]">
                Enhancing Business
              </span>
              , Workflows with Seamless{" "}
              <span className="text-[var(--purple-foreground)]">AI Agents</span>
            </p>
            <div className="mt-3 lg:mt-5 gap-3 flex justify-center lg:gap-7">
              <button className="text-[var(--background)] text-xs lg:text-base font-bold px-2 py-2 lg:py-2 lg:px-5 bg-[var(--purple-foreground)] rounded-md lg:rounded-xl  hover:bg-purple-700 duration-150 ">
                Get Started
              </button>
              <button className="border px-2 py-2 lg:py-2 text-xs lg:text-base lg:px-5 hover:bg-[var(--purple-foreground)] bg-transparent backdrop-blur-md duration-150 rounded-md lg:rounded-xl border-[var(--purple-foreground)]  ">
                See plans & pricing
              </button>
            </div>
          </div>
        </div>
        {/* <div className="animate-scale lg:size-32 absolute left-5 bottom-5">
          <img src={chipSvg} alt="chip-svg" />
        </div> */}
        <div className="absolute md:size-[50vh] lg:size-52 xl:size-56 bottom-0 lg:left-2 lg:bottom-5">
          <Lottie animationData={bot} loop={true} />
          <p className="hidden lg:block animate-scale absolute z-20 top-0  dark:bg-blue-700 right-0 py-2 px-3 rounded-lg rounded-bl-none text-[#f9fafb] translate-x-[30%] -translate-y-[10%] ">
            Welcome
          </p>
        </div>
        {/* <div className="animate-scale lg:size-28 absolute right-5 top-20 ">
          <img src={brainSvg} alt="chip-svg" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
