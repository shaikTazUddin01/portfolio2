"use client";
import React, { useEffect } from "react";

import { FaDownload } from "react-icons/fa";

import bgLine from "@/assets/bg-line.jpg";
import SectionTitle from "../SectionTitle/Title";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // <div className="h-full obje" style={{backgroundImage:`url(${bgLine.src})`}}>
    <div className=" py-20 relative" id="about">
      <div className="w-full px-5  relative max-w-5xl mx-auto z-10">
        <div className="mb-5" data-aos="zoom-in" data-aos-duration="500">
          <SectionTitle headerText={"About"} title={"About"}></SectionTitle>
        </div>

        <div className="" data-aos="zoom-in-up" data-aos-duration="500">
          <h1 className="text-justify">
            Hi, I&#39;m Shaik Taz Uddin, a passionate and dedicated web
            developer with 3 years of hands-on experience in building dynamic
            and responsive web applications. I specialize in modern web
            technologies such as{" "}
            <span className="text-primaryColor">
              {" "}
              HTML, CSS, Tailwind, JavaScript, TypeScript, React, Next.js,
              Node.js, Express.js, MongoDB, and Mongoose{" "}
            </span>
            . Currently, I&#39;m pursuing a{" "}
            <span className="text-primaryColor">
              Bachelor&#39;s degree in Computer Science and Engineering (CSE)
            </span>
            , which has further strengthened my problem-solving skills and
            deepened my understanding of cutting-edge technologies. I thrive in
            creating clean, efficient code and enjoy crafting seamless user
            experiences.
          </h1>
        </div>

        <div
          className="text-center flex justify-center"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <Link
            href={
              "https://drive.google.com/file/d/1meU8tXTYZybQY7HUTPHll4_vVDPiP6IM/view?usp=sharing"
            }
            target="_blank"
          >
            <Button
              className="text-default-50  bg-background/10 font-semibold
            mt-8 flex justify-center items-center gap-2"
              variant="bordered"
            >
              <FaDownload></FaDownload>

              <span>Resume</span>
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="absolute w-full h-full z-5 inset-0 bg-cover bg-center opacity-5 z-1"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      ></div>
    </div>
  );
};

export default About;
