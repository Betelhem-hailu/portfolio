import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { profile } from "../assets";

export const About = () => {
  return (
    <div className="my-[30px] bg-white dark:bg-gray-800" id="about">
      <div className="flex flex-col gap-[30px] md:flex-row md:justify-between">
        <div className="w-full">
          <div className="flex h-[50px] w-1/2 items-center rounded-r-full bg-[#EF98A4] px-[40px] lg:px-[80px]">
            <h1 className="text-base font-medium text-white lg:text-xl">
              About Me
            </h1>
          </div>
          <div className="flex w-full flex-col px-[20px] pt-[20px] md:px-[40px]">
            <p className="h-[200px] py-2 font-medium text-gray-700 dark:text-white">
              Hi!
              <br />
              My Name is <span>Betelhem Hailu</span>
            </p>
            <button
              type="button"
              className="mb-2 me-2 animate-pulse place-self-end rounded-3xl bg-gradient-to-r from-[#EF98A4] via-[#E87D86] to-[#D46670] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-[#F2AAB3] dark:focus:ring-[#C35C68]"
            >
              <a
                href="./Betelhem-Hailu-Resume.pdf" 
                download="Betelhem_Hailu_CV"
                className="text-white"
              >
                Download CV
              </a>
            </button>
            <h3 className="my-[10px] text-lg font-semibold dark:text-white">
              Contact
            </h3>
            <div className="grid grid-cols-1 dark:text-white md:grid-cols-2">
              <a
                className="flex cursor-pointer items-center gap-4"
                target="blank"
                href="https://www.linkedin.com/in/betelhem-hailu/"
              >
                <IoLogoLinkedin className="text-black dark:text-white" />
                <p>Betelhem-hailu</p>
              </a>
              <a
                className="flex cursor-pointer items-center gap-4"
                target="blank"
                href="mailto:betelhemhailu811@gmail.com"
              >
                <MdEmail className="text-black dark:text-white" />
                <p>betelhemhailu811@gmail.com</p>
              </a>
              <a
                className="flex cursor-pointer items-center gap-4"
                target="blank"
                href=""
              >
                <FaXTwitter className="text-black dark:text-white" />
                <p>twitter</p>
              </a>
              <a className="flex cursor-pointer items-center gap-4" href="">
                <FaPhoneAlt className="text-black dark:text-white" />
                <p>0931620143</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative ml-[30%] md:ml-0">
            <div className="animate-pluse left-[0px] top-[0px] h-[250px] w-[250px] rounded-full bg-gradient-to-l from-[#EF98A4] via-[#E87D86] to-[#D46670] md:h-[400px] md:w-[400px]"></div>
            <img
              className="absolute top-[30px] h-[200px] w-[200px] rounded-full object-cover md:h-[350px] md:w-[350px]"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
