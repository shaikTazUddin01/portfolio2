"use client";
import img from "@/assets/file (5).png";
import { Button } from "@nextui-org/react";
import Image from 'next/image';
import { BackgroundBeams } from "../ui/Background";

export function Hero() {
  return (
    <div className=" bg-[#151515] relative" id="home">
      <div className="flex h-auto justify-between items-center max-w-7xl mx-auto px-10 max-h-[650px] z-10">
        <div className="flex-1 space-y-1 px-2">
          <h1 className="leading-4 tracking-wide font-mono text-3xl">
            I&#39;M{" "}
            <span className="text-5xl font-bold text-primaryColor">
              Shaik Taz Uddin
            </span>
          </h1>
          <h1 className="tracking-widest pb-2 font-thin text-wrap ">
            A full stack Web Developer.Transforming ideas into dynamic
            high-performance website.
          </h1>
          <Button
            variant="bordered"
            className="text-default-50 border-primaryColor "
          >
            Contact me
          </Button>
        </div>
        <div className="w-[50%] flex justify-end z-10">
          <Image src={img.src} className="w-[82%]  " alt="image" width={500} height={500} />
        </div>
      </div>
      {/* <div className="absolute inset-0  bg-cover" style={{backgroundImage:`url(${bg1.src})`}}></div> */}
    
      <BackgroundBeams />
    </div>
  );
}
