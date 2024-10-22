"use client";
import { useGetSpecificBlogQuery } from "@/redux/feature/blog/blogApi";
import stripHtml from "@/utils/stripHtml";
import moment from "moment";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  const id  = useParams();
  console.log(id);
  const { data, isLoading } = useGetSpecificBlogQuery(id);

  const blog = data?.data;

  return (
    <div className="bg-[#151515]">
   <div className="max-w-6xl mx-auto px-5">
        <div className="bg-[#111111] text-default-100 rounded px-2 md:px-20 py-10">
      <div
        className="object-cover h-[350px] w-full  bg-cover  bg-center shadow-xl"
        style={{
          backgroundImage: `url(${blog?.image})`,
        }}
      ></div>

      <div className=" p-5">
        <h1 className="text-xl md:text-2xl font-medium">{blog?.title}</h1>
        <p className="text-[13px] text-default-400 pb-2 font-medium">
          # {blog?.tag}
        </p>
        <p className="text-justify">{stripHtml(blog?.description)}</p>
        <p className=" mt-2">Created At : <span className="text-sm text-default-400">{moment(blog?.createdAt).format("LL")}</span></p>
        <p className=" mt-2  md:text-right">Written By : <span>Shaik Taz Uddin</span></p>

      </div>
    </div>
    </div>
   </div>
);
};

export default BlogDetails;
