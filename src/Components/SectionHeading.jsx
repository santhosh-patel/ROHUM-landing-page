import React from "react";

const SectionHeading = ({ smallHeading, mainHeading, id }) => {
  return (
    <div>
      <h3
        id={id}
        className="text-center dark:text-gray-500 lg:text-xl font-bold !font-mono"
      >
        {smallHeading}
      </h3>
      <h1 className="saiba-font [text-shadow:5px_5px_purple] text-center text-5xl lg:text-7xl">
        {/* <h1 className="text-center text-5xl lg:text-7xl"> */}
        {mainHeading}
      </h1>
    </div>
  );
};

export default SectionHeading;
