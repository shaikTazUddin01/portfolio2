"use client";

import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import { useCreateskillMutation } from "@/redux/feature/skill/skillApi";
import { Button } from "@nextui-org/react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateSkill = () => {
  const [CreateSkill, { isLoading }] = useCreateskillMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // if (data?.name && data?.estimate) {
        const toastId = toast.loading("creating...");
        
        const skillInfo = {
          name: data?.name,
          estimate: Number(data?.estimate),
        };
  
        const res = (await CreateSkill(skillInfo)) as any;
        
        if (res?.data) {
          toast.success("Added Your New skill", { id: toastId });
        } else {
          toast.error(res?.error?.data?.message, { id: toastId });
        }
      // }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-5">
      <div className="w-full md:w-[50%] border shadow-xl p-5 rounded-xl my-10">
        <PForm onSubmit={handleSubmit}>
          <div className="space-y-2">
            <h1 className="text-center text-xl mb-2">Add Your Skill</h1>
            {/* Required fields */}

            <PInput name="name" label="Skill Name" required />
            <PInput
              name="estimate"
              label="Estimate(%)"
              type="number"
              required
            />

            <Button type="submit" className="w-full" color="primary">
              Submit
            </Button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateSkill;
