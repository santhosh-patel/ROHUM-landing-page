import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ai_info from "../info/rohum_ai_info.js";

gsap.registerPlugin(useGSAP);

const CubeInfo = ({ visibleFace }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef?.current?.children, {
      opacity: 0.15,
      duration: 1,
      stagger: 0.3,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-1/2 z-10 flex justify-center items-center">
      {/* { == -1 ? (
        <div className="">
          <h1
            ref={textRef}
            className="no-hover break-words font-bold px-2 lg:text-6xl"
          >
            {"Hover over the cube faces to explore."
              .split(" ")
              .map((char, i) => (
                <span key={i} className="inline-flex mr-3">
                  {char}
                </span>
              ))}
          </h1>
        </div>
      ) : ( */}
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <h1
          className="!font-mono font-bold p-3 rounded-2xl border border-[hsl(var(--border))] lg:text-6xl text-[#4f46e5] "
          style={{
            background:
              "linear-gradient(to bottom,transparent,rgba(0,0,0,0.8),transparent",
          }}
        >
          {ai_info[visibleFace].name}
        </h1>
        <div
          className="w-11/12 lg:p-5 rounded-md backdrop-blur-[1px] flex flex-col border gap-2 border-[hsl(var(--border))] "
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
              className="grid lg:grid-cols-[160px_auto] items-baseline"
            >
              <span className="!font-mono text-gray-600">{fields}:</span>
              <p className="text-sm">{ai_info[visibleFace][fields]}</p>
            </div>
          ))}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default CubeInfo;
