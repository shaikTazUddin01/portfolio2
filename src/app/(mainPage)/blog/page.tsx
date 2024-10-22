"use client";
import SectionTitle from "@/components/SectionTitle/Title";
import BlogCard from "@/components/ui/Blog/BlogCard";
import BlogCardLoading from "@/components/ui/Loading/BlogCard";
import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import React from "react";

const Blog = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <SectionTitle headerText="Blogs" title="Blogs" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {isLoading &&
        Array(4).fill(null)?.map((_,idx)=>(
          <BlogCardLoading key={idx} />
        ))
        }

        {data?.data?.map((blog: IBlog) => {
          return <BlogCard blog={blog} key={blog?._id} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
