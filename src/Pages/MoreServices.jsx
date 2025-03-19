import React, { useEffect, useState } from "react";
import { servicesInfo } from "../info/servicesinfo";
import { FaCheckCircle } from "react-icons/fa";

const MoreServices = ({ serviceIndex }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="overflow-hidden mt-22 lg:p-5 min-h-screen">
      <h1 className="font-semibold text-[var(--purple-foreground)] text-center max-w-2xl mx-auto lg:text-5xl">
        {servicesInfo[serviceIndex].heading}
      </h1>
      <div className="rounded-2xl flex justify-center items-center overflow-hidden lg:p-16">
        <img
          src={servicesInfo[serviceIndex].photo}
          alt="description image for the above service"
        />
      </div>
      <div className="px-16">
        <ul className="space-y-2 text-gray-400">
          {servicesInfo[serviceIndex]?.list?.length !== 0 &&
            servicesInfo[serviceIndex].list.map((li, i) => (
              <li className="flex items-center space-x-2" key={i}>
                <FaCheckCircle className="text-xl text-[var(--purple-foreground)]" />
                <span className="purple-fade-text text-lg">
                  {/* Emotion Recognition & Adaptive Responses */}
                  {li}
                </span>
              </li>
            ))}
        </ul>
        {servicesInfo[serviceIndex].hugePara.map((para, i) => (
          <p className="text-gray-500 my-10" key={i}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
