import React from "react";
import p1 from "@/assets/p1.jpg";
import { Image } from "@nextui-org/react";

const Portfolio = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center">PortFolio</h1>
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        <div className="border-2">
        <Image src={p1.src} className="rounded-none" alt="portfolio"/>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
