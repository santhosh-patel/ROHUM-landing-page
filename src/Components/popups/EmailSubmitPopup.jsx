import React from "react";

const EmailSubmitPopup = ({ setisSuccess, text }) => {
  return (
    <div className="fixed flex justify-center items-center backdrop-blur-2xl z-30 top-0 left-0 bg-black/50 h-screen w-full">
      <div className="border flex gap-5 flex-col justify-center items-center border-[hsl(var(--border))] bg-black rounded-2xl w-[50vh] h-[30vh] p-5">
        <h2 className="text-xl text-[var(--purple-foreground)] font-medium text-center">
          {text}
        </h2>
        <button
          className="w-4/5 text-black p-2 rounded-md font-semibold hover:bg-gray-300 duration-150 bg-white"
          onClick={() => setisSuccess(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default EmailSubmitPopup;
