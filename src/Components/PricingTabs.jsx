import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PricingTabs = ({ price, plan, planPara, l1, l2, l3, l4, standout }) => {
  return (
    <div
      className={`border relative lg:hover:scale-[1.03] duration-300 border-[hsl(var(--border))] w-full xl:w-[29%] lg:w-[30%] md:w-[45%] rounded-2xl py-8 xl:py-15 px-5 ${
        standout
          ? "[box-shadow:1px_1px_45px_5px_#6b21a8] bg-purple-700 popular-pricing lg:-translate-y-10"
          : "bg-gray-950"
      } `}
    >
      <h1
        className={`text-center mb-8 text-xl ${
          standout ? "text-gray-800" : "text-gray-500 "
        } font-semibold`}
      >
        <span
          className={`text-5xl font-bold ${
            standout ? "text-purple-100" : "text-[var(--purple-foreground)]"
          } `}
        >
          ${price}
        </span>
        /month
      </h1>
      <h2
        className={`text-4xl mb-3 ${
          standout ? "text-black" : "text-gray-300"
        } font-semibold bg-center `}
      >
        {plan}
      </h2>
      <p
        className={`text-sm mb-6 ${
          standout ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {/* Get started with our basic features at no cost. */}
        {planPara}
      </p>
      <h3
        className={`text-lg mb-5 font-semibold ${
          standout ? "text-purple-300" : "text-[var(--purple-foreground)]"
        } `}
      >
        Features Included:
      </h3>
      <ul
        className={`flex flex-col gap-5 justify-center ${
          standout ? "text-black" : "text-white"
        }`}
      >
        <li className="flex items-center gap-3 text-sm ">
          <BsCheckCircleFill
            className={`text-2xl ${
              standout ? "text-gray-900" : "text-gray-400"
            }`}
          />
          <span>{l1}</span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <BsCheckCircleFill
            className={`text-2xl ${
              standout ? "text-gray-900" : "text-gray-400"
            }`}
          />
          <span>{l2}</span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <BsCheckCircleFill
            className={`text-2xl ${
              standout ? "text-gray-900" : "text-gray-400"
            }`}
          />
          <span>{l3}</span>
        </li>
        {l4 && (
          <li className="flex items-center gap-3 text-sm">
            <BsCheckCircleFill
              className={`text-2xl ${
                standout ? "text-gray-900" : "text-gray-400"
              }`}
            />
            <span>{l4}</span>
          </li>
        )}
      </ul>
      <button
        className={`w-full mt-10 ${
          standout
            ? "bg-black text-[var(--purple-foreground)]"
            : "bg-purple-700 text-black "
        } py-2 rounded-full`}
      >
        Get Started
      </button>
      {standout && (
        <div className="most-popular-toast absolute overflow-hidden p-[2px] top-3 font-medium text-white right-3 text-sm  rounded-full ">
          <div className="p-2 px-3 bg-purple-700 rounded-full ">
            Most Popular
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingTabs;
