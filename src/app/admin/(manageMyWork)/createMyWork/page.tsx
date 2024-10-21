"use client";
import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import PTextArea from "@/components/Form/PTextArea";
import { useCreateMyWorkMutation } from "@/redux/feature/Mywork/MyworkApi";
import { Button } from "@nextui-org/react";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


const CreateWorkPage = () => {
  const [createMyWork,{isLoading}]=useCreateMyWorkMutation()

  const defaultvalue=
  {
    name: "Thunder Fitness Care",
    image:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729344469/fT_vkorv7.jpg",
    thumble:
      "https://res.cloudinary.com/dfm6yapyj/image/upload/v1729341015/fitnessCare_qmz2hg.jpg",
    livesiteClient: "https://thunder-fitnesscare.netlify.app",
    adminDashBoardLink: "https://thunder-fitnesscare.netlify.app/admin",
    livesiteServer: "https://fitness-equipment-server-silk.vercel.app",
    gitClient:
      "https://github.com/shaikTazUddin01/fitness-equipment-and-accessories-client",
    gitServer:
      "https://github.com/shaikTazUddin01/fitness-equipment-and-accessories-server",
    details:
      "It is  a comprehensive e-commerce website for fitness equipment using React, Redux, Mongoose, and Express. This platform will offer a seamless shopping experience with features like product listings, detailed product pages, and a user-friendly cart system. Additionally, it will include robust product management capabilities for administrators and bonus features such as debounced search and page refresh warnings to enhance performance and user experience. Optional integration with Stripe will provide secure payment processing. This project aims to create a modern, efficient, and user-centric online store for fitness enthusiasts.",
    feature: "jsdfkd,sdghjkdsfh",
    useTechnlogyClient: "dsjkfhjk,shdafjkhdfsa",
    useTechnlogyServer: "sdfjjkdslk,asdgjlkdfsj",
    adminEmail: "taz@gmail.com",
    adminPassword: "1234567",
  }

  const handleSubmit: SubmitHandler<FieldValues> = async(data) => {
    const id=toast.loading("creating...")
    try {
      const myWorkInFo = {
        name: data?.name,
        thumble: data?.thumble,
        details: data?.details,
        image: data?.image,
        livesiteClient: data?.livesiteClient,
        livesiteServer: data?.livesiteServer,
        adminDashBoardLink: data?.adminDashBoardLink || "",
        gitClient: data?.gitClient,
        gitServer: data?.gitServer,
        feature: data?.feature?.split(",")?.map((item: string) => item?.trim()),
        useTechnlogyClient: data?.useTechnlogyClient
          ?.split(",")
          ?.map((item: string) => item?.trim()),
        useTechnlogyServer: data?.useTechnlogyServer
          ?.split(",")
          ?.map((item: string) => item?.trim()),
        adminEmail: data?.adminEmail || "",
        adminPassword: data?.adminPassword || "",
      };
     
      const res =await createMyWork(myWorkInFo)
      console.log(res);
      if (res?.data) {
        toast.success("created success",{id:id})
      }else{
        toast.error(res?.data?.error)
      }
  
    } catch (error :any) {
      toast.error(error?.message)
    }

  };


 


  return (
    <div className="min-h-screen flex items-center justify-center w-full ">
      <div className="w-[80%] border shadow-xl p-5 rounded-xl my-10">
        <PForm onSubmit={handleSubmit} defaultValues={defaultvalue}>
          <div className="space-y-2">
            <h1 className="text-center text-xl mb-2">
              Create Your Work Details
            </h1>
            {/* Required fields */}
            <div className="flex items-center gap-2">
              <PInput name="name" label="Project Name" required />
              <PInput name="thumble" label="Thumbnail Image URL" required />
            </div>
            <div className="flex items-center gap-2">
              <PInput name="image" label="Project Image URL" required />
              <PInput name="livesiteClient" label="Live Client URL" required />
            </div>
            <div className="flex items-center gap-2">
              <PInput name="livesiteServer" label="Live Server URL" required />
              <PInput name="adminDashBoardLink" label="Admin Dashboard URL" />
            </div>
            <div className="flex items-center gap-2">
              <PInput
                name="gitClient"
                label="GitHub Client Repo URL"
                required
              />
              <PInput
                name="gitServer"
                label="GitHub Server Repo URL"
                required
              />{" "}
            </div>
            <div className="flex items-center gap-2">
              <PInput name="adminEmail" label="Admin Email" />
              <PInput
                name="adminPassword"
                label="Admin Password"
                type="text"
              />
            </div>

            {/* Array inputs for features and technologies */}
            <div className="flex gap-2 items-center">
              <PTextArea name="details" label="Project Details" required />
              <PTextArea
                name="feature"
                label="Features (Comma-separated)"
                required
              />
            </div>
            <div className="flex gap-2 items-center">
              <PTextArea
                name="useTechnlogyClient"
                label="Client Technologies (Comma-separated)"
                required
              />
              <PTextArea
                name="useTechnlogyServer"
                label="Server Technologies (Comma-separated)"
                required
              />
            </div>

            <Button type="submit" className="w-full" color="primary">
              Submit
            </Button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateWorkPage;
