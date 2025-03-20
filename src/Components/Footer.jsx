import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
// import { CiMail } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/rohum_logo.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-24">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 pl-5 md:mb-0">
            <a href="" className="flex items-center mb-8">
              {/* <img src={logo} className="h-9 me-3" alt="Rohum Logo" /> */}
              <span className=" text-4xl saiba-font [text-shadow:3px_3px_purple]">
                Rohum
              </span>
            </a>
            <div className="flex items-center gap-2 mb-2 justify-start">
              <FaLocationDot className="text-lg" />
              <span className="text-sm text-gray-300">Ankara, Turkey</span>
            </div>
            <div className="flex items-center gap-2 mb-2 justify-start">
              <FaPhone className="text-lg " />
              <span className="text-sm text-gray-300">+90 5521881710</span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <IoMail className="text-xl" />
              <span className="text-sm text-gray-300">info@rohum.tech</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline underline-offset-4"
                  >
                    tool1
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline underline-offset-4"
                  >
                    tool2
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Use Case
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline underline-offset-4">
                    Advertising
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline underline-offset-4">
                    Affilifate marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline underline-offset-4"
                  >
                    Education
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline underline-offset-4"
                  >
                    AI live stream
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline underline-offset-4">
                    Blogs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline underline-offset-4">
                    Affiliate Program
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline underline-offset-4"
                  >
                    Learning Center
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline underline-offset-4"
                  >
                    Alternative
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/policy"}
                    className="hover:underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/terms"}
                    className="hover:underline underline-offset-4"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-purple-950 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="" className="hover:underline underline-offset-4">
              Rohum
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center gap-4 sm:mt-0">
            <FaFacebook className="text-2xl text-gray-500 hover:text-white duration-150" />
            <FaInstagram className="text-2xl text-gray-500 hover:text-white duration-150" />
            <FaXTwitter className="text-2xl text-gray-500 hover:text-white duration-150" />
            <FaLinkedin className="text-2xl text-gray-500 hover:text-white duration-150" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
