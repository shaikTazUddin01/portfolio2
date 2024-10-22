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
   <div className="max-w-5xl mx-auto py-10">
        <div className="bg-background">
      <div
        className="object-cover h-[350px] w-full  bg-cover  bg-center shadow-xl"
        style={{
          backgroundImage: `url(${blog?.image})`,
        }}
      ></div>

      <div className="text-default-900 p-5">
        <h1 className="text-xl font-medium">{blog?.title}</h1>
        <p className="text-[13px] text-default-600 pb-2 font-medium">
          # {blog?.tag}
        </p>
        <p>{stripHtml(blog?.description)}</p>
        <p className=" mt-2">{moment(blog?.createdAt).format("LL")}</p>
      </div>
    </div>

   </div>
);
};

export default BlogDetails;
