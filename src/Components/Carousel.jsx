import React from "react";
import { carouselInfo } from "../info/carouselInfo";
const Carousel = () => {
  return (
    <div className="flex cursor-default flex-col lg:[box-shadow:1px_1px_15px_#d4d4d8] dark:shadow-none dark:border-y dark:border-[var(--purple-foreground)] lg:py-20 gap-20 lg:gap-5 p-2 mt-10 lg:mt-24 lg:flex-row ">
      {carouselInfo?.map((data, i) => (
        <div
          key={i}
          className=" w-full lg:hover:-translate-y-3 duration-300 md:w-2/3 mx-auto flex gap-3 group"
        >
          <div className="flex  lg:w-2/3 justify-center p-3 items-center ">
            <div className="border border-[var(--purple-foreground)] p-3 rounded-full">
              <data.image className="text-gray-500 dark:text-gray-50 text-4xl lg:text-5xl group-hover:text-[var(--purple-foreground)] duration-150" />
            </div>
          </div>
          <div className="">
            {" "}
            <h3 className="font-medium lg:text-xl lg:font-bold text-[var(--purple-foreground)]">
              {" "}
              {data.heading}
            </h3>
            <p className="text-xs text-gray-500 lg:text-sm lg:pr-5">
              {data.para}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
