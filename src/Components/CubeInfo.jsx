import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ai_info from "../info/rohum_ai_info.js";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(useGSAP);
const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  // exit: { opacity: 0, scale: 0 },
};

const CubeInfo = ({ visibleFace, Ishoverd }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef?.current?.children, {
      opacity: 0.15,
      duration: 1,
      stagger: 0.3,
      yoyo: true,
      yoyoEase: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full md:w-[45%] lg:w-1/2 z-10 flex justify-center items-center">
      {Ishoverd == false ? (
        <div className="">
          <h1
            ref={textRef}
            className="no-hover break-words text-center lg:text-start font-bold px-2 text-4xl lg:text-6xl"
          >
            {"Interact with the cube to explore our AI Models."
              .split(" ")
              .map((char, i) => (
                <span key={i} className="inline-flex mr-3">
                  {char}
                </span>
              ))}
          </h1>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="flex flex-col w-full lg:gap-10 items-center justify-center"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={visibleFace}
          >
            <h1
              className="!font-mono font-bold p-3 rounded-2xl border border-[hsl(var(--border))] text-4xl lg:text-6xl text-[#4f46e5] "
              style={{
                background:
                  "linear-gradient(to bottom,transparent,rgba(0,0,0,0.8),transparent",
              }}
            >
              {ai_info[visibleFace].name}
            </h1>
            <div
              className="w-11/12 p-2 lg:p-5 rounded-md backdrop-blur-[1px] flex flex-col border gap-2 border-[hsl(var(--border))] "
              style={{
                background:
                  "linear-gradient(120deg,transparent, rgba(79,70,229,0.1), transparent",
              }}
            >
              {[
                "Description",
                "Appearance",
                "VoiceTone",
                "Languages",
                "Speed",
                "Intelligence",
                "FacialExpressions",
                // "platformCompatibility",
                "Connectivity",
                // "useCases",
              ].map((fields, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[100px_auto] lg:grid-cols-[160px_auto] items-baseline"
                >
                  <span className="!font-mono text-xs lg:text-base text-gray-600">
                    {fields}:
                  </span>
                  <p className="text-[10px] lg:text-sm">
                    {ai_info[visibleFace][fields]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default CubeInfo;
