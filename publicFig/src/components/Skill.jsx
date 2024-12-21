import React from "react";
import { Education } from "../constants/Education";
import { SkillSet, SoftSkill, TechnicalSkill } from "../constants/Skill";
import { TbTargetArrow } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

const Skill = () => {
  return (
    <div className="h-full max-w-[80%] w-full rounded-r-[100px] bg-gradient-to-b from-[#EF98A4] to-[#915C63] p-6 p-[20px] md:p-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_35px_45px_rgba(0,0,0,0.9)]" id="skill">
      <h1 className="my-4 text-base sm:text-xl font-medium text-white">Education</h1>
          <div className="grid grid-col-1 gap-2 grid">
            {Education.map((Edu, i) => (
              <div key={i} className="">
                <h2 className="text-base font-medium text-white">
                  {Edu.qualification}
                </h2>
                <div className="flex items-center justify-between text-white">
                  <p>From {Edu.institution}</p>
                  <p className="rounded-full border border-[0.5] border-white px-2 py-1 text-white text-[10px] md:text-base">
                    {Edu.duration}
                  </p>
                </div>
                <p className="py-4 text-white">{Edu.description}</p>
              </div>
            ))}
          </div>
      <div className="flex flex-col md:flex-row gap-x-[50px]">
        <div className="w-full">
          <h1 className="mb-4 text-xl font-medium text-white">
            Technical Skill
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2  gap-x-4 gap-y-4 ">
            {TechnicalSkill.map((tech, i) => (
              <div key={i} className="flex w-[200px] items-center gap-1">
                <img
                  className="h-[40px] w-[40px] rounded-[100px] object-cover"
                  src={tech.image}
                  alt=""
                />
                <p className="text-sm text-white">{tech.name}</p>
              </div>
            ))}
          </div>
          <h1 className="my-2 mt-4 text-xl font-medium text-white">Interest</h1>
          <div className="grid grid-cols-3 gap-2 divide-x divide-gray-200">
            <p className="text-sm text-white">Technology trends</p>
            <p className="pl-2 text-sm text-white">Cloud Engineering</p>
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="my-4 text-xl font-medium text-white">Soft Skills</h1>
          <ul className="lg:grid md:grid-cols-1 lg:grid-cols-2 gap-2">
            {SoftSkill.map((soft, i) => (
              <li className="flex items-center text-white" key={i}>
                <TbTargetArrow size={15} style={{marginRight: "3px"}}/>
                {soft.name}
              </li>
            ))}
          </ul>
          <h1 className="my-4 text-xl font-medium text-white">Skill Set</h1>
          <ul className="grid grid-cols-1 gap-2">
            {SkillSet.map((soft, i) => (
              <li className="flex items-center text-white text-sm lg:text-base" key={i}>
                <FaCode  size={15} style={{marginRight: "3px"}} />
                {soft.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
