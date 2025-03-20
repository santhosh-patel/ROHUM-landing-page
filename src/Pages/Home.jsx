import React, { useEffect } from "react";
import award from "../assets/awardpng.png";
// import chipSvg from "../assets/chip.png";
import { Link } from "react-router-dom";
// import brainSvg from "../assets/brain.png";
import bot from "../assets/bot.json";
import Lottie from "lottie-react";

const Home = () => {
  let pric = null;
  useEffect(() => {
    pric = document.body.querySelector("#pricId");
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div className="relative h-screen flex justify-center items-center">
        <div className="absolute bottom-0 dark:[mask-image:radial-gradient(50%_30%_at_50%_30%,black,transparent)] left-0 dark:bg-[#581c87] right-0 top-0 md:dark:[mask-image:radial-gradient(30%_40%_at_50%_35%,black,transparent)] "></div>
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
              <Link
                to={"/download"}
                className="text-[var(--background)] text-xs lg:text-base font-bold px-2 py-2 lg:py-3 lg:px-5 bg-[var(--purple-foreground)] rounded-md hover:bg-purple-800 duration-150 "
              >
                Get Started
              </Link>
              <button
                className="border px-2 py-2 lg:py-3 text-xs lg:text-base lg:px-5 hover:bg-purple-950 bg-transparent backdrop-blur-md duration-150 rounded-md  border-[var(--purple-foreground)]"
                onClick={() => {
                  if (pric) {
                    const topPos =
                      pric.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({
                      top: topPos,
                      behavior: "smooth",
                    });
                  }
                }}
              >
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
          {/* <p className="hidden lg:block animate-scale absolute z-20 top-0  dark:bg-blue-700 right-0 py-2 px-3 rounded-lg rounded-bl-none text-[#f9fafb] translate-x-[30%] -translate-y-[10%] ">
            Welcome
          </p> */}
          <div
            className="hidden animate-scale lg:block absolute z-20 top-0 right-0 py-2 px-3 rounded-lg rounded-bl-none text-[#f9fafb] translate-x-[50%] -translate-y-[40%] bg-white/95 "
            // style={{background:"rgba(255,255,255,0.)"}}
          >
            <img className="h-10" src={award} alt="#8 award in AI chatbot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
