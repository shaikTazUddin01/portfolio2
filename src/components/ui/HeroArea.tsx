import img from "@/assets/3.png";
import { Button, Image } from "@nextui-org/react";
// import Image from 'next/image';

const HeroArea = () => {
  return (
    <div className=" bg-[#151515]">
      <div className="flex h-[600px] items-center max-w-7xl mx-auto">
        <div className="flex-1 space-y-1 px-2">
          <h1 className="leading-4 tracking-wide font-mono text-3xl">
            I&#39;M{" "}
            <span className="text-5xl font-bold text-primaryColor">Shaik Taz Uddin</span>
          </h1>
          <h1 className="tracking-widest pb-2 font-thin">A full stack Web Developer.Transforming ideas into dynamic high-performance website.</h1>
          <Button variant="bordered"  className="text-white border-primaryColor ">Contact me</Button>
        </div>
        <div className="w-[60%] h-full bg-no-repeat object-cover bg-cover text-center flex justify-center items-center"
        //  style={{backgroundImage:`url(${img.src})`}}
         >
          {/* <Image src={img.src} className="w-full h-full"/> */}
          <h1>image here</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
