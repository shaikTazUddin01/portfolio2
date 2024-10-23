"use client";
import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import SectionTitle from "../SectionTitle/Title";

import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative bg-cover" id="education">
      <div className="max-w-7xl mx-auto py-20">
        {/* <h1 className="text-4xl font-bold text-center pb-5">Education</h1> */}
        <div data-aos="zoom-in" data-aos-duration="500">
          <SectionTitle
            headerText="Education"
            title="Educational Qualification"
          />
        </div>

        <div className="relative mt-6">
          {/* Vertical Line for Timeline */}
          <div className="absolute w-[2px] left-1/2 transform -translate-x-1/2 h-full bg-primaryColor"></div>

          {/* JSC Section */}
          <div className="mb-10 flex items-start w-full pt-2 ">
            <div className="w-1/2"></div>
            <div
              className="relative w-10 mt-1 flex justify-center "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div
              className="w-1/2 pl-0"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <h1 className="text-xl font-semibold">In 2014 (JSC)</h1>
              <p>Junior School Certificate</p>
              <p className="text-sm text-[#808080]">
                Border Guard Public School, Jessore
              </p>
            </div>
          </div>

          {/* SSC Section */}
          <div className="mb-10 flex items-start w-full">
            <div className="w-1/2 text-right"
                          data-aos="zoom-in-up"
                          data-aos-duration="500"
            
            >
              <h1 className="text-xl font-semibold">In 2017 (SSC)</h1>
              <p>Senior School Certificate</p>
              <p className="text-sm text-[#808080]">
                Border Guard Public School, Jessore
              </p>
            </div>
            <div className="relative w-10 flex justify-center mt-1"
                          data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div className="w-1/2"></div>
          </div>
          {/* diploma Section */}
          <div className="mb-10 flex items-start w-full pt-4">
            <div className="w-1/2"></div>
            <div className="relative w-10 mt-1 flex justify-center "
                          data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div className="w-1/2 pl-0"
                          data-aos="zoom-in-up"
                          data-aos-duration="500"
            
            >
              <h1 className="text-xl font-semibold">In 2017-2021 (Diploma)</h1>
              <p>Diploma in computer science and Engineering</p>
              <p className="text-sm text-[#808080]">
                Jessore Polytechnic instutite,Jessore
              </p>
            </div>
          </div>

          {/* SSC Section */}
          <div className="mb-10 flex items-start w-full">
            <div className="w-1/2 text-right"
                          data-aos="zoom-in-up"
                          data-aos-duration="500"
            
            >
              <h1 className="text-xl font-semibold">In 2022-Present (BSC)</h1>
              <p>BSC in computer science and Engineering</p>
              <p className="text-sm text-[#808080]">
                Northen University Of Business and Technology,Khulna
              </p>
            </div>
            <div className="relative w-10 flex justify-center mt-1"
                          data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaCircle
                className="text-default-50 bg-primaryColor rounded-full p-[2px]"
                size={14}
              />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
