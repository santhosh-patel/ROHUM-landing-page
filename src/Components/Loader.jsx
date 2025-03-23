import React from "react";
import rohum_logo from "../assets/Rohum_logo.png";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black flex justify-center items-center fixed z-40 top-0 left-0 h-screen w-screen"
    >
      <h2 className="text-3xl absolute top-5 left-5 saiba-font [text-shadow:3px_3px_purple]">
        Rohum
      </h2>
      <motion.div
        exit={{ scale: 0 }}
        className="loader border rounded-full p-3 border-purple-950 "
      >
        <img src={rohum_logo} alt="logo" className="size-15" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
