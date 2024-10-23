"use client";
import { Progress, Skeleton } from "@nextui-org/react";
import React, { useEffect } from "react";
import bgLine from "@/assets/l-3.jpg";
import SectionTitle from "../SectionTitle/Title";
import { useGetskillQuery } from "@/redux/feature/skill/skillApi";
import { ISkill } from "@/type/skill";
// import { skills,  } from "@/constant/skills";
import AOS from "aos";
import "aos/dist/aos.css";
const MySkills = () => {
  const { data, isLoading } = useGetskillQuery(undefined);
  const skills = data?.data;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative" id="skill">
      <div className="py-20 max-w-7xl mx-auto z-10">
        <div data-aos="zoom-in" data-aos-duration="500">
          <SectionTitle title=" My Skills" headerText="Skills" />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 pt-6 gap-5 md:gap-2 w-full px-5 lg:px-10 uppercase">
          {isLoading &&
            Array(12)
              .fill(null)
              ?.map((_, idx) => (
                <div
                  key={idx}
                  className="space-y-1 mb-1"
                  data-aos="zoom-in-up"
                  data-aos-duration="100"
                >
                  <Skeleton className="w-[80px] h-[18px] rounded bg-[#484848] border" />
                  <Skeleton className="w-full md:w-[95%]  z-20 h-5 rounded-xl bg-[#484848 border" />
                </div>
              ))}

          {skills?.map((skill: ISkill) => (
            <div
              className="w-full md:w-[95%]  z-20"
              key={skill?._id}
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1>{skill.name}</h1>
              <Progress
                size="lg"
                aria-label={skill.name}
                value={skill.estimate}
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
        className="absolute w-full h-full inset-0 bg-cover bg-center opacity-10 z-1"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      ></div>
    </div>
  );
};

export default MySkills;
