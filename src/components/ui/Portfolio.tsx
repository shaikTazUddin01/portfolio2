"use client";

import SectionTitle from "../SectionTitle/Title";
import { motion } from "framer-motion";

import { TPortfolio } from "@/type/portfolio";
import Link from "next/link";
import Image from "next/image";
import { useGetMyWorkQuery } from "@/redux/feature/Mywork/MyworkApi";
import PortCart from "./Loading/PortCart";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Portfolio = () => {
  const { data, isLoading } = useGetMyWorkQuery(undefined);

  const myPortfolios = data?.data;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-5" id="portfolio">
      {/* <h1 className="text-4xl text-center">PortFolio</h1> */}
      <div data-aos="zoom-in" data-aos-duration="500">
      <SectionTitle headerText="PortFolio" title="my Portfolio" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        {isLoading
          ? Array(4)
              .fill(null)
              ?.map((_, idx) => {
                return(
                  <div key={idx}
                  data-aos="zoom-in-up"
                  data-aos-duration="500"    
                  >
                    <PortCart />
                  </div>
                )
              })
          : myPortfolios?.map((portfolio: TPortfolio) => {
              return (
                <div
                  className="border border-primaryColor rounded overflow-hidden max-h-[400px]"
                  key={portfolio?._id}
                  data-aos="zoom-in-up"
                  data-aos-duration="500"    
                >
                  <motion.div
                    className="overflow-hidden h-full relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={portfolio?.thumble}
                      alt={portfolio?.name}
                      height={400}
                      width={500}
                      loading="lazy"
                      className="w-full h-full rounded-none object-cover"
                    />
                    <Link href={`/portfolio/${portfolio?.name}`}>
                      <motion.span
                        className="absolute bottom-5 end-5 bg-primaryColor text-default-100  rounded-md text-2xl"
                        animate={{ borderRadius: "8px", padding: "8px" }}
                        whileHover={{ borderRadius: "50%", padding: "20px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          // damping: 15,
                        }}
                      >
                        <FaArrowRight />
                      </motion.span>
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
