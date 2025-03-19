import React from "react";
import { useNavigate } from "react-router-dom";
const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen overflow-hidden justify-center items-center gap-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-purple-600 font-bold">
        Coming Soon ...
      </h1>
      <span
        className="text-xl text-gray-500 underline underline-offset-4 hover:text-white duration-150 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go Back
      </span>
    </div>
  );
};

export default ComingSoon;
