import React from "react";
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center pb-5">Experience</h1>
      
      <div className="relative">
        {/* Vertical Line for Timeline */}
        <div className="absolute w-1 left-1/2 transform -translate-x-1/2 h-full bg-primaryColor"></div>
        
        {/* JSC Section */}
        <div className="mb-10 flex items-start w-full pt-4">
          <div className="w-1/2">
            
          </div>
          <div className="relative w-10 mt-1 flex justify-center ">
            <FaCircle className="text-white bg-primaryColor rounded-full p-[1px]" size={17} />
          </div>
          <div className="w-1/2 pl-0">
            <h1 className="text-xl font-semibold">JSC In 2014</h1>
            <p>Border Guard Public School, Jessore</p>
          </div>
        </div>

        {/* SSC Section */}
        <div className="mb-10 flex items-start w-full">
          <div className="w-1/2 text-right">
           
            <h1 className="text-xl font-semibold">SSC In 2017</h1>
            <p>Border Guard Public School, Jessore</p>
          </div>
          <div className="relative w-10 flex justify-center mt-1">
          <FaCircle className="text-white bg-primaryColor rounded-full p-[1px]" size={17} />
          </div>
          <div className="w-1/2">
          </div>
        </div>
        {/* JSC Section */}
        <div className="mb-10 flex items-start w-full pt-4">
          <div className="w-1/2">
            
          </div>
          <div className="relative w-10 mt-1 flex justify-center ">
            <FaCircle className="text-white bg-primaryColor rounded-full p-[1px]" size={17} />
          </div>
          <div className="w-1/2 pl-0">
            <h1 className="text-xl font-semibold">JSC In 2014</h1>
            <p>Border Guard Public School, Jessore</p>
          </div>
        </div>

        {/* SSC Section */}
        <div className="mb-10 flex items-start w-full">
          <div className="w-1/2 text-right">
           
            <h1 className="text-xl font-semibold">SSC In 2017</h1>
            <p>Border Guard Public School, Jessore</p>
          </div>
          <div className="relative w-10 flex justify-center mt-1">
          <FaCircle className="text-white bg-primaryColor rounded-full p-[1px]" size={17} />
          </div>
          <div className="w-1/2">
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Experience;
