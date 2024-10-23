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
  const [createMyWork, { isLoading }] = useCreateMyWorkMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating...");
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

      const res = (await createMyWork(myWorkInFo)) as any;

      if (res?.data) {
        toast.success("created success", { id: toastId });
      } else {
        toast.error(res?.error?.data?.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-5">
      <div className="w-full  md:w-[80%] border shadow-xl p-5 rounded-xl my-10">
        <PForm onSubmit={handleSubmit}>
          <div className="space-y-2">
            <h1 className="text-center text-xl mb-2">
              Create Your Work Details
            </h1>
           
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
              <PInput name="adminPassword" label="Admin Password" type="text" />
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
              Create
            </Button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateWorkPage;
