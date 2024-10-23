"use client";
import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import { useCreateBlogMutation } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import Debounce from "@/utils/Debounce";
import QuillEditor from "@/utils/QuillEditor";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateBlog = () => {
  const [description, setDiscription] = useState<string>("");
    const [createBlog,{isLoading}]=useCreateBlogMutation()

  const blogDescription=Debounce(description)

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try {
      const toastId=toast.loading("creating...")

if (blogDescription) {
     const BlogData :IBlog={
        title:data?.title,
        image:data?.image,
        tag:data?.tag,
        description:blogDescription
     }
       const res =await createBlog(BlogData) as any
      //  console.log(res);
       if (res?.data) {
         toast.success("created success",{id:toastId})
       }else{
         toast.error(res?.error?.data?.error,{id:toastId})
       }
}


    } catch (error :any) {
      toast.error(error?.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-5">
      <div className="w-full md:w-[60%] border shadow-xl p-5 rounded-xl my-10">
        <PForm onSubmit={handleSubmit}>
          <div className="space-y-2">
            <h1 className="text-center text-xl mb-2">Create Blog</h1>
            {/* Required fields */}

            <PInput name="title" label="Blog Title" required />
            <PInput name="image" label="Image URL" required />
            <PInput name="tag" label="Blog Tag" required />
            <QuillEditor setDiscription={setDiscription} />
            <Button type="submit" className="w-full" color="primary">
              Submit
            </Button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateBlog;
