import { Progress } from "@nextui-org/react";
import React from "react";
import bgLine from "@/assets/l-3.jpg";
import SectionTitle from "../SectionTitle/Title";
import { skills, TSkill } from "@/constant/skills";

const MySkills = () => {
  return (
    <div className="relative" id="skill">
      <div className="py-20 max-w-7xl mx-auto">
        {/* <h1 className="text-4xl text-center">My Skills</h1> */}
        <SectionTitle title=" My Skills" headerText="Skills" />
        <div className="grid  grid-cols-1 md:grid-cols-2 pt-6 gap-5 md:gap-2 w-full px-5 lg:px-10 uppercase">
          {skills.map((skill: TSkill) => (
            <div className="w-full md:w-[95%]" key={skill?.skillName}>
              <h1>{skill.skillName}</h1>
              <Progress
                size="lg"
                aria-label={skill.skillName}
                value={skill.value}
                classNames={{
                  track: " border border-default",
                  indicator: "bg-primaryColor",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      ></div>
    </div>
  );
};

export default MySkills;
