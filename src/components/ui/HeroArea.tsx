import img from "@/assets/file (5).png";
import { Button, Image } from "@nextui-org/react";
// import Image from 'next/image';

const HeroArea = () => {
  return (
    <div className=" bg-[#151515]">
      <div className="flex h-auto justify-center items-center max-w-7xl mx-auto px-10 max-h-[650px] ">
        <div className="flex-1 space-y-1 px-2">
          <h1 className="leading-4 tracking-wide font-mono text-3xl">
            I&#39;M{" "}
            <span className="text-5xl font-bold text-primaryColor">Shaik Taz Uddin</span>
          </h1>
          <h1 className="tracking-widest pb-2 font-thin text-wrap">A full stack Web Developer.Transforming ideas into dynamic high-performance website.</h1>
          <Button variant="bordered"  className="text-white border-primaryColor ">Contact me</Button>
        </div>
        <div className="w-[50%]"
         >
          <Image src={img.src} className="w-[75%] mx-auto" alt="image"/>
       
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
