"use client";
// import p1 from "@/assets/p2.jpeg";
// import { Image } from "@nextui-org/react";
import SectionTitle from "../SectionTitle/Title";
import { motion } from "framer-motion";
import { myPortfolios } from "@/constant/myPortfolio";
import { TPortfolio } from "@/type/portfolio";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5" id="portfolio">
      {/* <h1 className="text-4xl text-center">PortFolio</h1> */}
      <SectionTitle headerText="PortFolio" title="my Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6">
        {myPortfolios?.map((portfolio: TPortfolio) => {
          return (
            <div
              className="border rounded overflow-hidden max-h-[400px]"
              key={portfolio?._id}
            >
              <motion.div
                className="overflow-hidden h-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href={`/portfolio/${portfolio?.name}`}>
                  <Image
                    src={portfolio?.thumble}
                    alt={portfolio?.name}
                    height={400}
                    width={500}
                    loading="lazy"
                    className="w-full h-full rounded-none object-cover"
                  />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
