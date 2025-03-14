import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";

const PricingTabs = ({
  price,
  plan,
  planPara,
  l1,
  l2,
  l3,
  l4,
  l5,
  standout,
  free,
  custom,
}) => {
  const [IsHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`border relative lg:hover:scale-[1.03] duration-300 border-[hsl(var(--border))] w-full xl:w-[29%] lg:w-[30%] md:w-[45%] rounded-2xl py-8 xl:py-15 px-5 ${
        standout
          ? "[box-shadow:1px_1px_45px_5px_#6b21a8] bg-purple-700 popular-pricing lg:-translate-y-10"
          : "bg-gray-950"
      } `}
    >
      {!custom ? (
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
      ) : (
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
            Custom Pricing
          </span>
        </h1>
      )}
      <div className="flex items-center relative mb-3 justify-between">
        <h2
          className={`text-4xl ${
            standout ? "text-black" : "text-gray-300"
          } font-semibold `}
        >
          {plan}
        </h2>
        <div
          className={`text-xl border-[1.5px] p-1 rounded-md ${
            standout ? "border-black" : "border-white/80"
          }`}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IoIosAdd />
        </div>
        {
          <div
            className={`absolute ${
              standout
                ? "[box-shadow:1px_1px_45px_25px_#6b21a8] border-gray-800 bg-purple-700"
                : "[box-shadow:1px_1px_45px_40px_black] border-[hsl(var(--border))]  bg-gray-950"
            } border top-10 right-8 px-3 py-5 transition-all duration-500 rounded-md ${
              !IsHovered ? "opacity-0" : "opacity-100"
            } `}
          >
            <h2
              className={`text-2xl font-semibold mb-5 ${
                standout ? "text-black" : "text-white"
              }`}
            >
              Add On Options
            </h2>
            <ul className="text-sm list-disc pl-3 flex flex-col gap-2 text-gray-300">
              <li className="">
                <p>
                  AI voice per cloning for
                  <span className="font-bold text-white"> $20 </span>
                </p>
              </li>
              <li className="">
                <p>
                  Additional prompts for{" "}
                  <span className="font-bold text-white">$10 </span>
                  per 50 extra prompts
                </p>
              </li>
              <li className="">
                <p>
                  Multi-language support for{" "}
                  <span className="font-bold text-white">$20 </span>
                  per month
                </p>
              </li>
            </ul>
          </div>
        }
      </div>
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
          <div className="">
            <BsCheckCircleFill
              className={`text-2xl ${
                standout ? "text-gray-900" : "text-gray-400"
              }`}
            />
          </div>
          <span>{l1}</span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <div className="">
            <BsCheckCircleFill
              className={`text-2xl ${
                standout ? "text-gray-900" : "text-gray-400"
              }`}
            />
          </div>
          <span>{l2}</span>
        </li>
        <li className="flex items-center gap-3 text-sm">
          <div className="">
            <BsCheckCircleFill
              className={`text-2xl ${
                standout ? "text-gray-900" : "text-gray-400"
              }`}
            />
          </div>
          <span>{l3}</span>
        </li>
        {l4 && (
          <li className="flex items-center gap-3 text-sm">
            <div className="">
              <BsCheckCircleFill
                className={`text-2xl ${
                  standout ? "text-gray-900" : "text-gray-400"
                }`}
              />
            </div>
            <span>{l4}</span>
          </li>
        )}
        {l5 && (
          <li className="flex items-center gap-3 text-sm">
            <div className="">
              <BsCheckCircleFill
                className={`text-2xl ${
                  standout ? "text-gray-900" : "text-gray-400"
                }`}
              />
            </div>
            <span>{l5}</span>
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
        {free ? "Get Started" : "Buy Now"}
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
