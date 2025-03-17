import React, { useEffect } from "react";
import rohum_logo from "../assets/rohum_logo.png";

const Navbar2 = () => {
  let feat = null;
  let ser = null;
  let pric = null;
  let cont = null;
  useEffect(() => {
    feat = document.body.querySelector("#featId");
    ser = document.body.querySelector("#serId");
    pric = document.body.querySelector("#pricId");
  }, []);

  return (
    <div className="w-full bg-transparent px-4 py-4 flex justify-between z-40 fixed overflow-hidden top-0 backdrop-blur-md">
      <div className="flex gap-1 justify-center  items-center">
        <div className="size-13 ">
          <img src={rohum_logo} alt="Rohum logo" />
        </div>
        <h2 className="text-2xl saiba-font [text-shadow:3px_3px_purple]">
          Rohum
        </h2>
      </div>
      {/* <div className="border"> */}
      <ul className="flex items-center bg-white/5 absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]  text-sm gap-5 rounded-full py-3 px-5 border-white/40 border">
        <li
          className="cursor-pointer hover:text-white/70 hover:scale-90 duration-150 "
          onClick={() => {
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
        <button className="button button-primary border px-4 py-[9px] rounded-md border-purple-300/40">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
