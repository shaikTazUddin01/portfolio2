import { Skeleton } from "@nextui-org/react";
import React from "react";

const BlogCardLoading = () => {
  return (
    <div className="bg-[#111111]">
      <Skeleton className="w-full h-[350px] bg-default-900" />
      <div className="text-default-900 p-5">
        <Skeleton className="h-8 w-[70%] rounded-lg mb-2 bg-default-400" />

        <Skeleton className="h-5 w-full rounded-lg mb-1 bg-default-400" />
        <Skeleton className="h-5 w-full rounded-lg mb-1 bg-default-400" />
        <Skeleton className="h-5 w-[85%] rounded-lg mb-1 bg-default-400" />
        <Skeleton className="h-5 w-[60%] rounded-lg mb-3 bg-default-400" />

        <Skeleton className="h-6 w-[40%] rounded-lg bg-default-400" />
      </div>
    </div>
  );
};

export default BlogCardLoading;
