import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqsInfo } from "../info/faqsInfo";

const variants = {
  initial: { opacity: 0, maxHeight: 0, overflow: "hidden" },
  animate: { opacity: 1, maxHeight: 200 }, // Adjust maxHeight dynamically
  exit: { opacity: 0, maxHeight: 0 },
};

const FaqsSmall = ({ IshHovered, setIshHovered }) => {
  return (
    <div className="mt-10 block md:hidden px-2">
      {faqsInfo &&
        faqsInfo.length !== 0 &&
        faqsInfo.map((element, i) => (
          <div
            key={i}
            className="faqs-card-small my-5 shadow-lg px-4 py-6 flex flex-col rounded-lg z-20 justify-center overflow-hidden items-center cursor-default"
            onMouseEnter={() => {
              setIshHovered((prev) =>
                prev.map((item, index) => (index === i ? true : item))
              );
            }}
            onMouseLeave={() => {
              setIshHovered((prev) =>
                prev.map((item, index) => (index === i ? false : item))
              );
            }}
          >
            <h2 className="text-center text-lg text-white font-semibold">
              {element.question}
            </h2>{" "}
            <AnimatePresence>
              {IshHovered[i] && (
                <motion.p
                  className="text-sm mt-5 text-gray-500"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {element.ans}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
    </div>
  );
};

export default FaqsSmall;
