import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const paraRef = useRef(null);

  useGSAP(() => {
    gsap.from(paraRef?.current?.children, {
      opacity: 0,
      duration: 1,
      stagger: 0.03,
      yoyo: true,
      yoyoEase: "none",
      repeat: -1,
    });
  }, []);
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black flex justify-center items-center fixed z-40 top-0 left-0 h-screen w-screen"
    >
      <motion.div exit={{ opacity: 0 }}>
        {/* <img src={rohum_logo} alt="logo" className="size-15" /> */}
        <h2 className="text-3xl saiba-font text-center font-bold">
          Rohum<span className="text-5xl animate-pulse text-purple-800">.</span>
        </h2>
        <p
          id="loading-para"
          ref={paraRef}
          className="text-center text-white/80 text-sm"
        >
          {"Initialising Avatar Space".split("").map((el, i) => (
            <span key={i}>{el}</span>
          ))}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
