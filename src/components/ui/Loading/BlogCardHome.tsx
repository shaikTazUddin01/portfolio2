import { Skeleton } from "@nextui-org/react";
import React from "react";

const BlogCardHome = () => {
  return (
    
      <div className="bg-[#242424dc] h-[350px]  rounded-xl relative p-5 flex flex-col justify-between border border-primaryColor">
        <div className="">
          
          <Skeleton className="h-7 w-[80px] rounded-md mb-4 bg-default-400" />
        </div>
       
         <div className="">
            
          <Skeleton className="h-8 w-[70%] rounded-lg mb-2 bg-default-400" />
         
         <Skeleton className="h-5 w-full rounded-lg mb-1 bg-default-400" />
         <Skeleton className="h-5 w-[85%] rounded-lg mb-1 bg-default-400" />
         <Skeleton className="h-5 w-[60%] rounded-lg mb-3 bg-default-400" />
        
         <Skeleton className="h-6 w-[40%] rounded-lg bg-default-400" />
      
         </div>
      </div>
    
  );
};

export default BlogCardHome;
