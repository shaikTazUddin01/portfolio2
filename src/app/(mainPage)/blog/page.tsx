"use client";
import SectionTitle from "@/components/SectionTitle/Title";
import BlogCard from "@/components/ui/Blog/BlogCard";
import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import React from "react";

const Blog = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);

  return (
    <div className="max-w-6xl mx-auto px-5 py-20">
      <SectionTitle headerText="WelCome" title="Blogs" />

      <div>
        {data?.data?.map((blog: IBlog) => {
          return <BlogCard blog={blog}  key={blog?._id}/>;
        })}
      </div>
    </div>
  );
};

export default Blog;
