import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import { useUpdateSkillMutation } from "@/redux/feature/skill/skillApi";
import { ISkill } from "@/type/skill";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { RiEdit2Fill } from "react-icons/ri";
import { toast } from "sonner";

export default function UPdateSkill({ skill }: { skill: ISkill }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [UpdateSkill] = useUpdateSkillMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // if (data?.name && data?.estimate) {
      const toastId = toast.loading("creating...");

      const updateSkillInfo = {
        name: data?.name,
        estimate: Number(data?.estimate),
      };

      //   console.log(updateSkillInfo);

      const res = (await UpdateSkill({
        id: skill?._id,
        data: updateSkillInfo,
      })) as any;
      console.log(res);
      if (res?.data) {
        toast.success(" Update success", { id: toastId });
        onOpenChange();
      } else {
        toast.error(res?.error?.data?.message, { id: toastId });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Button
        className="text-green-600 border-green-600 text-xl"
        variant="bordered"
        size="sm"
        onPress={onOpen}
      >
        <RiEdit2Fill />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              
              <ModalBody>
                <PForm onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <h1 className="text-center text-xl my-2">Edit Your Skill</h1>
                    {/* Required fields */}

                    <PInput
                      name="name"
                      label="Skill Name"
                      required
                      defaultvalue={skill?.name}
                    />
                    <PInput
                      name="estimate"
                      label="Estimate(%)"
                      type="number"
                      required
                      defaultvalue={skill?.estimate}
                    />

                    <Button type="submit" className="w-full" color="primary">
                      Update
                    </Button>
                  </div>
                </PForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
