"use client";
import img from "@/assets/taz.png";
import Image from "next/image";
import { BackgroundBeams } from "./Background";
import HandleHashScroll from "@/utils/HandleHashScroll";

export function HeroBanner() {
  return (
    <div
      className=" bg-[#151515] relative pt-10 pb-20 md:pt-0 md:pb-0 "
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row h-auto justify-between items-center max-w-7xl mx-auto px-5 md:px-10 max-h-[650px] ">
        <div className="flex-1 space-y-1 px-2 text-justify md:text-left z-10">
          <h1 className="leading-4 tracking-wide font-mono text-3xl mt-5 md:mt-0">
            I&#39;M{" "}
            <span className="text-5xl font-bold text-primaryColor">
              Shaik Taz Uddin
            </span>
          </h1>
          <h1 className="tracking-widest pb-2 font-thin text-wrap ">
            A full stack Web Developer.Transforming ideas into dynamic
            high-performance website.
          </h1>
          <div className="flex justify-center md:justify-start w-full z-50">
            {/* button */}
            <HandleHashScroll label="Contact Me" targetId="#contact" />
          </div>
        </div>
        <div className="w-full  md:w-[50%] flex justify-center md:justify-end z-10">
          <Image
            src={img.src}
            className="w-full md:w-[82%]  "
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* <div className="absolute inset-0  bg-cover" style={{backgroundImage:`url(${bg1.src})`}}></div> */}

      <BackgroundBeams />
    </div>
  );
}
