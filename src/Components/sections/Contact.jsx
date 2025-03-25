import React from "react";
import SectionHeading from "../SectionHeading";
import Lottie from "lottie-react";
import animated_section from "../../assets/contact-svg.json";

const Contact = () => {
  return (
    <div className="mt-20 min-h-screen">
      <SectionHeading
        id={"contId"}
        smallHeading="CONTACT US"
        mainHeading="Talk With Us"
      />
      <div className="bg-white/50 w-full mt-5 py-20 bg-[radial-gradient(#ffffff33_1px,#000000FF_1px)] bg-[size:20px_20px]">
        <div className="w-full md:w-[90%] lg:w-3/4 mx-auto border border-[hsl(var(--border))] p-2 md:p-5 lg:p-10 rounded-2xl backdrop-blur-md flex justify-center items-center">
          <form className="border bg-purple-950/20 w-full md:w-[45%] p-4 rounded-xl border-[hsl(var(--border))] ">
            <label
              htmlFor="email"
              className="text-[var(--purple-foreground)] text-sm  font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              className="mt-2 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none mb-2 duration-200 text-white pl-2 w-full"
              type="text"
              required
              placeholder="Enter your name"
              // aria-invalid={validEmail ? "true" : "false"}
              aria-describedby="emailnote"
            />
            <label
              htmlFor="email"
              className="text-[var(--purple-foreground)] text-sm  font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              className="mt-2 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none mb-2 duration-200 text-white pl-2 w-full "
              type="email"
              required
              placeholder="Enter your email"
              // aria-invalid={validEmail ? "true" : "false"}
              aria-describedby="emailnote"
            />
            <label
              htmlFor="phone"
              className="text-[var(--purple-foreground)] text-sm  font-semibold"
            >
              Phone No
            </label>
            <div className="mt-2 gap-2 items-center flex">
              <select
                id="cars"
                className="text-xs text-gray-600 h-auto w-10"
                name="cars"
              >
                <option
                  className="bg-gray-600 text-white outline-none"
                  value="volvo"
                >
                  +91
                </option>
                <option
                  className="bg-gray-600 text-white outline-none"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  className="bg-gray-600 text-white outline-none"
                  value="fiat"
                >
                  Fiat
                </option>
                <option
                  className="bg-gray-600 text-white outline-none"
                  value="audi"
                >
                  Audi
                </option>
              </select>
              <input
                id="phoneNo"
                className=" border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none mb-2 duration-200 text-white pl-2 w-full "
                type="tel"
                required
                placeholder="Enter your phone number"
                // aria-invalid={validEmail ? "true" : "false"}
                aria-describedby="emailnote"
              />
            </div>

            <label
              htmlFor="message"
              className="text-[var(--purple-foreground)] text-sm  font-semibold"
            >
              Message
            </label>
            <textarea
              id="msg"
              className="mt-2 min-h-24 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none mb-2 duration-200 text-white pl-2 w-full "
              required
              placeholder="I am really instrested in your product..."
              // aria-invalid={validEmail ? "true" : "false"}
              aria-describedby="emailnote"
            />

            <button className="bg-[var(--purple-foreground)] mt-2 hover:bg-purple-800 duration-150 text-black font-medium w-full py-2 rounded-md">
              Submit
            </button>
          </form>
          <div className="hidden md:block w-[55%]">
            <Lottie animationData={animated_section} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
