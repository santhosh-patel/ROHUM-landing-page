import React, { useState } from "react";
import rohum_logo from "../assets/ROHUM_LOGO.png";
import { MdOutlineMenu, MdOutlineLightMode } from "react-icons/md";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [HiddenNav, setHiddenNav] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (location) => {
    const prevLoc = scrollY.getPrevious();
    if (location > prevLoc && location > 100) {
      setHiddenNav(true);
    } else {
      setHiddenNav(false);
    }
  });

  // const handleMode = () => {
  //   const mode = document.querySelector("html").className;
  //   if (mode == "light") {
  //     document.querySelector("html").className = "dark";
  //   } else {
  //     document.querySelector("html").className = "light";
  //   }
  // };

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-200%" } }}
      animate={HiddenNav ? "hidden" : "visible"}
      className="w-full 2xl:w-[60vw] 2xl:mx-auto z-40 fixed overflow-hidden top-3 flex justify-center"
    >
      <div className="flex p-3 w-11/12 rounded-2xl dark:border border-t-purple-900 border-x-purple-600 border-b-purple-500 bg-transparent backdrop-blur-md justify-between">
        <div className="flex items-center gap-3">
          <img src={rohum_logo} alt="" className="size-10 rounded-full" />
          <h1 className="text-2xl font-bold text-[var(--purple-foreground)] ">
            ROHUM
          </h1>
        </div>
        <div className="hidden lg:flex items-center justify-center -translate-x-[8%]">
          <ul className="flex  gap-8 items-center text-gray-400 ">
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              Home
            </li>
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              About
            </li>
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              Features
            </li>
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              Services
            </li>
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-[var(--foreground)] hover:font-medium hover:scale-110 duration-150 ">
              Contact
            </li>
          </ul>
        </div>
        {/* last section  */}
        <div className=" md:gap-3 flex gap-2 items-center">
          <div
            className="border px-4 py-2 rounded-md text-gray-400 hover:text-white border-[hsl(var(--border))] hover:border-white cursor-default  duration-150 "
            // onClick={handleMode}
          >
            {/* <MdOutlineLightMode />p */}
            <p className="!font-mono">Demo</p>
          </div>
          <div className="border lg:hidden p-1 md:p-2 rounded-md border-gray-800 borde-[var(--purple-foreground)] text-lg">
            <MdOutlineMenu />
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
