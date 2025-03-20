import React, { useEffect, useState } from "react";
import rohum_logo from "../assets/rohum_logo.png";
import { useNavigate } from "react-router-dom";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const Navbar2 = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  const [navbarHeight, setnavbarHeight] = useState();
  const navigate = useNavigate();
  let feat = null;
  let ser = null;
  let pric = null;
  // let cont = null;
  useEffect(() => {
    setnavbarHeight(document.querySelector("#navbar").clientHeight);
    console.log("updated");
  }, []);

  return (
    <>
      <div
        id="navbar"
        className="w-full flex bg-transparent px-4 py-4 justify-between z-40 fixed overflow-hidden top-0 backdrop-blur-md"
      >
        <div className="flex gap-1 justify-center  items-center">
          <div className="size-13 ">
            <img src={rohum_logo} alt="Rohum logo" />
          </div>
          <h2 className="text-2xl saiba-font [text-shadow:3px_3px_purple]">
            Rohum
          </h2>
        </div>
        {/* <div className="border"> */}
        <ul className="hidden lg:flex items-center bg-white/5 absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]  text-sm gap-5 rounded-full py-3 px-5 border-white/40 border">
          <li
            className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 "
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </li>

          <li
            className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 "
            onClick={() => {
              feat = document.body.querySelector("#featId");
              if (feat) {
                const topPos =
                  feat.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                  top: topPos,
                  behavior: "smooth",
                });
              }
            }}
          >
            Features
          </li>
          <li
            className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 "
            onClick={() => {
              ser = document.body.querySelector("#serId");
              if (ser) {
                const topPos =
                  ser.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                  top: topPos,
                  behavior: "smooth",
                });
              }
            }}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 "
            onClick={() => {
              pric = document.body.querySelector("#pricId");

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
            Pricing
          </li>
          <li className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 ">
            Contact
          </li>
        </ul>
        {/* </div> */}
        <div className="flex items-center text-sm font-medium justify-center gap-3">
          <button className="border px-4 py-[8px] rounded-md border-purple-950">
            Login
          </button>
          <button className="hidden lg:block button button-primary border px-4 py-[9px] rounded-md border-purple-300/40">
            Get Started
          </button>
          <div
            className={`lg:hidden border p-2 text-lg hover:bg-purple-950 duration-150 rounded-md border-purple-950 ${
              ToggleMenu ? "text-purple-600" : "text-white"
            }`}
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <TbLayoutSidebarLeftCollapse />
          </div>
        </div>
      </div>
      {/* sideMenu */}
      <AnimatePresence>
        {ToggleMenu && (
          <motion.div
            style={{
              top: navbarHeight + "px",
              height: `calc(99vh - ${navbarHeight}px)`,
            }}
            key="modal"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden  m-1 mt-0 mr-0 border-purple-950 rounded-2xl p-5 items-center justify-center gap-5 rounded-tr-none rounded-br-none border flex-col fixed w-full z-30 bg-transparent backdrop-blur-3xl left-0 flex"
          >
            <li
              className="list-none cursor-pointer text-xl hover:text-purple-600 duration-150"
              onClick={() => {
                setToggleMenu((prev) => !prev);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </li>
            <li
              className="list-none cursor-pointer text-xl hover:text-purple-600 duration-150"
              onClick={() => {
                setToggleMenu((prev) => !prev);
                feat = document.body.querySelector("#featId");
                if (feat) {
                  const topPos =
                    feat.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({
                    top: topPos,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Features
            </li>
            <li
              className="list-none cursor-pointer text-xl hover:text-purple-600 duration-150"
              onClick={() => {
                setToggleMenu((prev) => !prev);
                ser = document.body.querySelector("#serId");
                if (ser) {
                  const topPos =
                    ser.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({
                    top: topPos,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Services
            </li>
            <li
              className="list-none cursor-pointer text-xl hover:text-purple-600 duration-150"
              onClick={() => {
                setToggleMenu((prev) => !prev);
                pric = document.body.querySelector("#pricId");
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
              Pricing
            </li>
            <li className="list-none cursor-pointer text-xl hover:text-purple-600 duration-150">
              Contact US
            </li>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2;
