"use client";
import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { useGetMyWorkQuery } from "@/redux/feature/Mywork/MyworkApi";
import { useGetskillQuery } from "@/redux/feature/skill/skillApi";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const Dashboard = () => {
  const { data: blog, isLoading: blogLoading } = useGetBlogQuery(undefined);
  const { data: skill, isLoading: skillLoading } = useGetskillQuery(undefined);
  const { data: project, isLoading: projectLoading } =
    useGetMyWorkQuery(undefined);

  if (blogLoading && skillLoading && projectLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {
            Array(3)?.fill(null)?.map((_,idx)=>{
                return(
                    <Skeleton className="h-20 rounded-xl shadow-xl" key={idx}/>
                )
            })
        }
       
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
      <div className="h-20 border border-primaryColor rounded-xl shadow-xl flex justify-center items-center">
        <p className="text-xl">
          Total Blog Post: <span>{blog?.data?.length}</span>
        </p>
      </div>
      <div className="h-20 border border-primaryColor rounded-xl shadow-xl flex justify-center items-center">
        <p className="text-xl">
          Total Added Skill: <span>{skill?.data?.length}</span>
        </p>
      </div>
      <div className="h-20 border border-primaryColor rounded-xl shadow-xl flex justify-center items-center">
        <p className="text-xl">
          Total Project: <span>{project?.data?.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
