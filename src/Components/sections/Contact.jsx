import React, { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading";
import Lottie from "lottie-react";
import emailAxios from "../../api/email.api";
// import dotenv from "dotenv";
import animated_section from "../../assets/contact-svg.json";
import EmailSubmitPopup from "../popups/emailSubmitPopup";
const NAME_REGEX = /^[A-Za-z ]{4,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
// dotenv.config();

const Contact = () => {
  const [email, setemail] = useState("");
  const [emailFocus, setemailFocus] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);

  const [Name, setName] = useState("");
  const [NameFocus, setNameFocus] = useState(false);
  const [validName, setvalidName] = useState(false);

  const [Phone1, setPhone1] = useState("");
  const [Phone1Focus, setPhone1Focus] = useState(false);
  const [validPhone, setvalidPhone] = useState(false);

  const [Phone2, setPhone2] = useState("");
  const [Phone2Focus, setPhone2Focus] = useState(false);
  // const [validPhone2, setvalidPhone2] = useState(false);

  const [message, setmessage] = useState("");

  const [ErrMsg, setErrMsg] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setvalidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = NAME_REGEX.test(Name);
    setvalidName(result);
    // console.log(result);
  }, [Name]);

  useEffect(() => {
    // console.log(Phone1 + Phone2);
    const result = PHONE_REGEX.test(Phone1 + Phone2);
    setvalidPhone(result);
    // console.log(result);
  }, [Phone1, Phone2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: Name,
      email: email,
      phone_no: Phone1 + Phone2,
      msg: message,
    };
    setisLoading(true);

    try {
      const response = await emailAxios.post("/email", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) setisSuccess(true);
      // console.log(response);
    } catch (error) {
      // console.log(error.response.data);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="mt-20 min-h-screen">
      <SectionHeading
        id={"contId"}
        smallHeading="CONTACT US"
        mainHeading="Talk With Us"
      />
      <div className="bg-white/50 w-full mt-5 py-20 bg-[radial-gradient(#ffffff33_1px,#000000FF_1px)] bg-[size:20px_20px]">
        <div className="w-full md:w-[90%] lg:w-3/4 mx-auto border border-[hsl(var(--border))] p-2 md:p-5 lg:p-10 rounded-2xl backdrop-blur-md flex justify-center items-center">
          <form
            className="border relative bg-purple-950/20 w-full md:w-[45%] p-4 rounded-xl border-[hsl(var(--border))] "
            onSubmit={handleSubmit}
          >
            {isLoading && (
              <span className="loader-form absolute top-2 right-2 "></span>
            )}
            <div className="mb-2">
              <label
                htmlFor="name"
                className="text-[var(--purple-foreground)] text-sm  font-semibold"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                id="name"
                className="mt-2 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none duration-200 text-white pl-2 w-full"
                type="text"
                required
                placeholder="Enter your name"
                // aria-invalid={validEmail ? "true" : "false"}
                aria-describedby="emailnote"
              />
              {!validName && NameFocus && Name && (
                <span className="text-xs ml-1 text-red-600">
                  Please enter valid name
                </span>
              )}
            </div>
            <div className="mb-2 ">
              <label
                htmlFor="email"
                className="text-[var(--purple-foreground)] text-sm  font-semibold"
              >
                Email
              </label>
              <input
                onBlur={() => setemailFocus(false)}
                onFocus={() => setemailFocus(true)}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                className="mt-2 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none duration-200 text-white pl-2 w-full "
                type="email"
                required
                placeholder="Enter your email"
                // aria-invalid={validEmail ? "true" : "false"}
                aria-describedby="emailnote"
              />
              {email && emailFocus && !validEmail && (
                <span className="text-xs ml-1 text-red-600">
                  Please enter valid email
                </span>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="text-[var(--purple-foreground)] text-sm  font-semibold"
              >
                Phone No
              </label>
              <div className="mt-1 items-center gap-2 flex">
                <input
                  onBlur={() => setPhone1Focus(false)}
                  onFocus={() => setPhone1Focus(true)}
                  className="text border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none duration-200 text-white pl-2 w-[15%]"
                  placeholder="+90"
                  maxLength={3}
                  required
                  minLength={2}
                  onChange={(e) => setPhone1(e.target.value)}
                  // value={"+90"}
                />

                <input
                  onBlur={() => setPhone2Focus(false)}
                  onFocus={() => setPhone2Focus(true)}
                  id="phoneNo"
                  className=" border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none duration-200 text-white pl-2 w-full "
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  // aria-invalid={validEmail ? "true" : "false"}
                  // aria-describedby="emailnote"
                  maxLength={10}
                  // onChange={handlePhoneChange2}
                  onChange={(e) => setPhone2(e.target.value)}
                  minLength={10}
                />
              </div>
              {(Phone1 || Phone2) &&
                (Phone1Focus || Phone2Focus) &&
                !validPhone && (
                  <span className="text-xs ml-1 text-red-600">
                    Please enter valid phone number
                  </span>
                )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="text-[var(--purple-foreground)] text-sm  font-semibold"
              >
                Message
              </label>
              <textarea
                maxLength={300}
                // minLength={}
                onChange={(e) => setmessage(e.target.value)}
                id="msg"
                className="mt-2 min-h-24 block border placeholder:text-gray-600 bg-transparent border-[hsl(var(--border))] rounded-[0.5rem] py-3 text-xs focus:outline-none duration-200 text-white pl-2 w-full "
                required
                placeholder="I am really instrested in your product..."
              />
            </div>

            <button
              className="bg-[var(--purple-foreground)] mt-2 hover:bg-purple-800 duration-150 text-black font-medium w-full py-2 rounded-md disabled:cursor-not-allowed disabled:bg-gray-800"
              disabled={!(validEmail && validName && validPhone)}
            >
              Submit
            </button>
          </form>
          <div className="hidden md:block w-[55%]">
            <Lottie animationData={animated_section} loop={true} />
          </div>
        </div>
      </div>
      {isSuccess && (
        <EmailSubmitPopup
          setisSuccess={setisSuccess}
          text={"Email Submitted Successfully"}
        />
      )}
    </div>
  );
};

export default Contact;
