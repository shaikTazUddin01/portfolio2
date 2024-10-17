import { Progress } from "@nextui-org/react";
import React from "react";
import bgLine from "@/assets/l-3.jpg";
import SectionTitle from "../SectionTitle/Title";

const MySkills = () => {
  return (
    <div className="relative">
      <div className="py-20 max-w-7xl mx-auto">
        {/* <h1 className="text-4xl text-center">My Skills</h1> */}
        <SectionTitle title=" My Skills" headerText="Skills" />
        <div className="grid grid-cols-2 pt-6 gap-2 w-full px-10 uppercase">
          <div className="w-[95%]">
            <h1>HTML</h1>
            <Progress size="lg" aria-label="html" value={95} />
          </div>
          <div className="w-[95%]">
            <h1>CSS</h1>
            <Progress size="lg" aria-label="css" value={90} />
          </div>
          <div className="w-[95%]">
            <h1>Tailwind</h1>
            <Progress size="lg" aria-label="tailwind" value={90} />
          </div>
          <div className="w-[95%]">
            <h1>JAVASCRIPT</h1>
            <Progress size="lg" aria-label="javascript" value={85} />
          </div>
          <div className="w-[95%]">
            <h1>TYPESCRIPT</h1>
            <Progress size="lg" aria-label="typescript" value={85} />
          </div>
          <div className="w-[95%]">
            <h1>REACT</h1>
            <Progress size="lg" aria-label="react" value={95} />
          </div>
          <div className="w-[95%]">
            <h1>REDUX</h1>
            <Progress size="lg" aria-label="redux" value={95} />
          </div>
          <div className="w-[95%]">
            <h1>NEXT.js</h1>
            <Progress size="lg" aria-label="next.js" value={80} />
          </div>
          <div className="w-[95%]">
            <h1>NODE.js</h1>
            <Progress size="lg" aria-label="node.js" value={90} />
          </div>
          <div className="w-[95%]">
            <h1>EXPRESS.js</h1>
            <Progress size="lg" aria-label="express.js" value={90} />
          </div>
          <div className="w-[95%]">
            <h1>MONGODB</h1>
            <Progress size="lg" aria-label="mongodb" value={90} />
          </div>
          <div className="w-[95%]">
            <h1>MONGOOSE</h1>
            <Progress size="lg" aria-label="mongoose" value={92} />
          </div>
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
