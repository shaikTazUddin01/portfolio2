import React from "react";
import p1 from "@/assets/p1.jpg";
import { Image } from "@nextui-org/react";
import SectionTitle from "../SectionTitle/Title";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5" id="portfolio">
      {/* <h1 className="text-4xl text-center">PortFolio</h1> */}
      <SectionTitle headerText="PortFolio" title="my Portfolio"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
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
