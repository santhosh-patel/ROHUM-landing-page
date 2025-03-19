import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiTick } from "react-icons/ti";
import { RiRobot2Line } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { motion } from "framer-motion";
import SectionHeading from "../Components/SectionHeading";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Features = () => {
  const progressRef = useRef(null);
  const ballRef = useRef(null);
  const cardsRef = useRef(null);
  const containerRef = useRef(null);

  const [content, setContent] = useState(0);

  useGSAP(() => {
    // Create timeline for card animations
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      // gsap for cards
      gsap.from(card, {
        opacity: 0.1,
        // y: 50,
        scrollTrigger: {
          //   markers: true,
          trigger: card,
          start: "top 50%",
          end: "bottom 90%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });

      // gsap for left card aniamtion
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        // markers: true, // useful for debugging
        onEnter: () => setContent(index),
        onEnterBack: () => setContent(index),
      });
    });

    // Progress line animation
    gsap.to(progressRef.current, {
      height: "100%",
      ease: "none",
      //   smoothOrigin: true,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(ballRef.current, {
      top: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Pin the left section while scrolling
    ScrollTrigger.create({
      //   markers: true,
      trigger: containerRef.current,
      start: "top 20%",
      end: "bottom 90%",
      pin: ".left",
    });
  }, []);

  return (
    <div className="min-h-screen scroll-div mt-20 p-5">
      <SectionHeading
        id={"featId"}
        smallHeading="AI FEATURES"
        mainHeading="Features"
      />
      <div
        ref={containerRef}
        className="md:justify-center mt-20 md:gap-10 lg:gap-0 lg:justify-between h-[250vh] lg:h-[300vh] cards-div w-full flex items-start relative"
      >
        <div
          className={`left w-[40%] relative hidden lg:flex justify-center items-center mt-10 rounded-lg md:h-[30vh] lg:h-[60vh]`}
        >
          <div className="absolute top-0 z-[-2] h-full bg-white/20 w-full bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          <div className="left-layer-div w-full h-full border border-[hsl(var(--border))] rounded-lg flex justify-center items-center">
            {/* <div className="left-upper-div"> */}
            <motion.div
              className="border-glow-animation p-[2px] rounded-xl"
              key={content} // Ensures animation triggers on content change
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={iconVariants}
            >
              {content === 0 && (
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <RiRobot2Line />
                </div>
              )}
              {content === 1 && (
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <FaEthereum />

                  {/* <RiRobot2Line /> */}
                </div>
              )}
              {content === 2 && (
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  {/* <RiRobot2Line /> */}
                  <GiMoneyStack />
                </div>
              )}
              {content === 3 && (
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  {/* <RiRobot2Line /> */}
                  <GiTeacher />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* progress line */}
        <div className="progress-container relative w-[2px] h-full flex justify-center bg-gray-200 dark:bg-gray-700">
          <div
            ref={progressRef}
            className="progress-line w-full bg-[var(--purple-foreground)] absolute top-0 left-0"
            style={{ height: "0%" }}
          />
          <div
            ref={ballRef}
            className="size-3 absolute rounded-full bg-white [box-shadow:1px_1px_25px_10px_#4338ca] "
            style={{ top: "0%" }}
          />
        </div>
        {/* right cards  */}
        <div
          ref={cardsRef}
          className="right w-full md:w-4/5 lg:w-[50%] p-3 flex h-full justify-between flex-col"
        >
          {/* card1 */}
          <div className="card bg-transparent h-[30%] flex gap-5 w-full justify-start items-center rounded-lg shadow-lg transform transition-all">
            <div className="max-w-lg pl-5 md:pl-0 ">
              <h3 className="purple-fade-text text-3xl text-start lg:text-4xl font-bold mb-7">
                Realistic AI Avatars
              </h3>
              <p className="text-gray-600 text-start text-xs md:text-sm mb-3 dark:text-gray-400">
                Our avatars understand and respond with emotional intelligence,
                making interactions more human-like and engaging.
              </p>
              <ul>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Seamless text, voice, and video communication.
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Understands user emotions for personalized interactions.
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Adapts to user behavior for enhanced engagement.
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex lg:hidden ">
              <div className="border-glow-animation inline-flex p-[2px] rounded-xl">
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <RiRobot2Line />
                </div>
              </div>
            </div>
          </div>
          {/* card12*/}
          <div className="card bg-transparent h-[30%] flex gap-5 w-full justify-start items-center rounded-lg shadow-lg transform transition-all">
            <div className="max-w-lg pl-5 md:pl-0 ">
              <h3 className="purple-fade-text text-3xl text-start lg:text-4xl font-bold mb-7">
                Crypto Simplified
              </h3>
              <p className="text-gray-600 text-start text-xs md:text-sm mb-3 dark:text-gray-400">
                Learn and invest in cryptocurrency easily with AI-powered
                guidance
              </p>
              <ul>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Step-by-step crypto education for beginners.{" "}
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Real-time insights and investment strategies.{" "}
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Safe and user-friendly investment recommendations.{" "}
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex lg:hidden ">
              <div className="border-glow-animation inline-flex p-[2px] rounded-xl">
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <FaEthereum />
                </div>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="card bg-transparent h-[30%] flex gap-5 w-full justify-start items-center rounded-lg shadow-lg transform transition-all">
            <div className="max-w-lg pl-5 md:pl-0 ">
              <h3 className="purple-fade-text text-3xl text-start lg:text-4xl font-bold mb-7">
                AI Business Assistance
              </h3>
              <p className="text-gray-600 text-start text-xs md:text-sm mb-3 dark:text-gray-400">
                AI Business Assistance leverages AI avatars to streamline
                operations, enhance customer interactions, and automate routine
                tasks efficiently.
              </p>
              <ul>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Automates business workflows and enhances productivity.
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  AI-driven customer support and task management.{" "}
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Seamless integration with existing business platforms.{" "}
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex lg:hidden ">
              <div className="border-glow-animation inline-flex p-[2px] rounded-xl">
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <GiMoneyStack />
                </div>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="card bg-transparent h-[30%] flex gap-5 w-full justify-start items-center rounded-lg shadow-lg transform transition-all">
            <div className="max-w-lg pl-5 md:pl-0 ">
              <h3 className="purple-fade-text text-3xl text-start lg:text-4xl font-bold mb-7">
                Interactive Training{" "}
              </h3>
              <p className="text-gray-600 text-start text-xs md:text-sm mb-3 dark:text-gray-400">
                Interactive Learning & Training uses AI avatars to provide
                immersive, personalized, and engaging educational experiences.
              </p>
              <ul>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Teaches dance, exercise, and Kung Fu step-by-step.{" "}
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Personalized training based on user progress.{" "}
                </li>
                <li className="text-xs md:text-sm dark:text-gray-400 flex items-center">
                  <TiTick className="text-[var(--purple-foreground)] text-2xl " />
                  Adapts to user skill level for effective learning.{" "}
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex lg:hidden ">
              <div className="border-glow-animation inline-flex p-[2px] rounded-xl">
                <div className="text-7xl left-layer-div-card text-gray-50 p-5 rounded-xl">
                  <GiTeacher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
