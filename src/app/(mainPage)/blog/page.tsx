"use client";
import SectionTitle from "@/components/SectionTitle/Title";
import BlogCard from "@/components/ui/Blog/BlogCard";
import BlogCardLoading from "@/components/ui/Loading/BlogCard";
import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div data-aos="zoom-in" data-aos-duration="500">
        <SectionTitle headerText="Blogs" title="Blogs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {isLoading &&
          Array(4)
            .fill(null)
            ?.map((_, idx) => (
              <div key={idx} data-aos="zoom-in-up" data-aos-duration="500">
                <BlogCardLoading />
              </div>
            ))}

        {data?.data?.map((blog: IBlog) => {
          return (
            <div key={blog?._id} data-aos="zoom-in-up" data-aos-duration="500">
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
