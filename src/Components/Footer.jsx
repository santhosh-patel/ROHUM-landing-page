import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
// import { CiMail } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  let feat = null;
  let ser = null;
  let pric = null;
  let cont = null;
  return (
    <footer className="bg-black mt-24">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-10 lg:pl-5 md:mb-0">
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
              <a
                href="mailto:info@rohum.tech"
                target="_blank"
                className="text-sm text-gray-300 hover:underline cursor-pointer underline-offset-4"
              >
                info@rohum.tech
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                quick links
              </h2>
              <ul className="text-gray-500 text-sm lg:text-base dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    // href="https://github.com/themesberg/flowbite"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    // href="https://github.com/themesberg/flowbite"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    // href="https://github.com/themesberg/flowbite"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    // href="https://github.com/themesberg/flowbite"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    // href="https://github.com/themesberg/flowbite"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    // href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline cursor-pointer underline-offset-4"
                  >
                    FAQS
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
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Advertising
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Affilifate marketing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Education
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    AI Live Stream
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Newsletter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Learning Center
                  </Link>
                </li>
                <li className="">
                  <Link
                    to={"/download"}
                    className="hover:underline underline-offset-4"
                  >
                    Alternative
                  </Link>
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
          <div className="flex mt-4 sm:justify-center items-center gap-4 sm:mt-0">
            <a href="https://www.youtube.com/@ROHUM-ai" target="_blank">
              <FaYoutube className="text-[28px] text-gray-500 hover:text-white duration-150" />
            </a>
            <a
              href=" https://www.facebook.com/profile.php?id=61574500895806"
              target="_blank"
            >
              <FaFacebook className="text-2xl text-gray-500 hover:text-white duration-150" />
            </a>
            <a href="https://www.instagram.com/rohum.tech" target="_blank">
              <FaInstagram className="text-2xl text-gray-500 hover:text-white duration-150" />
            </a>
            <a href="https://x.com/rohum_ai" target="_blank">
              <FaXTwitter className="text-2xl text-gray-500 hover:text-white duration-150" />
            </a>
            <a href="https://www.linkedin.com/company/rohum" target="_blank">
              <FaLinkedin className="text-2xl text-gray-500 hover:text-white duration-150" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
