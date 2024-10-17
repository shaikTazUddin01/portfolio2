import React from "react";

import { FaDownload } from "react-icons/fa";

import bgLine from '@/assets/bg-line.jpg'
import SectionTitle from "../SectionTitle/Title";
const About = () => {
  return (
    // <div className="h-full obje" style={{backgroundImage:`url(${bgLine.src})`}}>
    <div className=" py-20 relative">
      <div className="w-full px-5 md:px-0 relative max-w-5xl mx-auto">
        <div className="mb-5">
          <SectionTitle headerText={"About"} title={"About"}></SectionTitle>
        </div>

        <div className="pr-5">
          <h1 className="text-justify">
           Hi, I&#39;m Shaik Taz Uddin, a passionate and dedicated web
            developer with 3 years of hands-on experience in building dynamic
            and responsive web applications. I specialize in modern web
            technologies such as HTML, CSS, Tailwind, JavaScript, TypeScript,
            React, Next.js, Node.js, Express.js, MongoDB, and Mongoose.
            Currently, I&#39;m pursuing a Bachelor&#39;s degree in Computer Science and
            Engineering (CSE), which has further strengthened my problem-solving
            skills and deepened my understanding of cutting-edge technologies. I
            thrive in creating clean, efficient code and enjoy crafting seamless
            user experiences.
          </h1>
          
        </div>

        <div className="text-center flex justify-center">
         
            <button className="py-2 px-5 bg-primaryColor hover:bg-[#2aca1f] text-xl font-semibold rounded-md mt-10 flex justify-center items-center gap-2">
              <FaDownload></FaDownload>
              <p>Resume</p>
            </button>
          
        </div>
      </div>
      
    <div className="absolute w-full h-full z-5 inset-0 bg-cover bg-center opacity-5" style={{backgroundImage:`url(${bgLine.src})`}}></div>

    </div>
    
  );
};

export default About;
