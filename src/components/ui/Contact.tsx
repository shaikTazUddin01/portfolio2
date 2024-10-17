// import { Link } from '@nextui-org/react';
import Link from "next/link";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../SectionTitle/Title";
// import SectionTitle from "../SectionTitle/Title";
import bgLine from "@/assets/l-3.jpg";

const Contact = () => {
  return (
    <div className="relative">
      <div className="py-20 max-w-7xl mx-auto ">
        <div className="px-5 ">
          {/* <h1 className="text-4xl text-center mb-5">Contact</h1> */}
          {/* <SectionTitle headerText="Contact" title="con"/> */}
          <SectionTitle headerText="Contact" title="Contect" />

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="border rounded-xl h-20 flex justify-center items-center gap-1 text-xl bg-[#3e3d3d]">
              <span className="text-3xl">
                <MdOutlineMail />
              </span>
              <span className="flex flex-col">
                <span>Email</span>
                <Link href="mailto:tazahmedsoft@gmail.com" className="text-sm">
                  tazahmedsoft@gmail.com
                </Link>
              </span>
            </div>
            <div className="border rounded-xl h-20 flex justify-center items-center gap-1 text-2xl bg-[#3e3d3d]">
              <span className="text-3xl">
                <LuPhone />
              </span>
              <span>
                <Link href="mailto:tazahmedsoft@gmail.com">
                  +880 1834 957677
                </Link>
              </span>
            </div>
            <div className="border rounded-xl h-20 flex justify-center items-center gap-1 text-2xl bg-[#3e3d3d]">
              <span className="text-3xl">
                <IoLocationOutline />
              </span>
              <span>
                <Link href="mailto:tazahmedsoft@gmail.com">
                  Mollahpara Amtola,Jessore
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-5 items-center justify-center">
          <div className="bg-primaryColor h-[2px] flex-1"></div>
          <div className="flex px-5 gap-2 text-2xl">
            <FaFacebook />
            <MdOutlineMail />
            <FaLinkedin />
            <FaGithub />
          </div>
          <div className="bg-primaryColor h-[2px] flex-1"></div>
        </div>
      </div>
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      ></div>
    </div>
  );
};

export default Contact;
