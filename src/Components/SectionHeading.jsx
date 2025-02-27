import React from "react";

const SectionHeading = ({ smallHeading, mainHeading }) => {
  return (
    <div>
      <h3 className="text-center dark:text-gray-500 lg:text-xl font-bold !font-mono">
        {smallHeading}
      </h3>
      <h1 className="text-center text-5xl lg:text-7xl">{mainHeading}</h1>
    </div>
  );
};

export default SectionHeading;
