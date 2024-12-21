import React from "react";
import { Works } from "../constants/Works";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div className="mx-[50px] mt-[80px] bg-white dark:bg-gray-800" id="work">
      <h1 className="text-center text-2xl font-bold dark:text-white">Works</h1>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {Works.map((work, i) => (
          <div className="group relative" key={i}>
            <img
              src={work.image}
              alt="Gallery Item"
              className="object-fit w-full rounded-lg shadow-md sm:h-[200px] md:h-[250px] lg:h-[300px] lg:object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center gap-4 rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href={work.githubLink}
                target="_blank"
                className="rounded-md bg-[#FF7C8E] px-4 py-2 text-white shadow-md hover:bg-[#EF98A4] focus:outline-none"
              >
                <FaGithub />
              </a>
              <a
                href={work.demoLink}
                target="_blank"
                className="rounded-md bg-[#80D5EA] px-4 py-2 text-white shadow-md hover:bg-[#A8C0FE] focus:outline-none"
              >
                <FaEye />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
