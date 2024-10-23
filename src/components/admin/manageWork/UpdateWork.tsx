import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import PTextArea from "@/components/Form/PTextArea";
import { useUpdateMyWorkMutation } from "@/redux/feature/Mywork/MyworkApi";
import { TPortfolio } from "@/type/portfolio";
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

export default function UpdateWork({ project }: { project:TPortfolio }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [UpdateWork] = useUpdateMyWorkMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // if (data?.name && data?.estimate) {
      const toastId = toast.loading("creating...");

      const updateProjectInFo = {
        name: data?.name,
        thumble: data?.thumble,
        details: data?.details,
        image: data?.image,
        livesiteClient: data?.livesiteClient,
        livesiteServer: data?.livesiteServer,
        adminDashBoardLink: data?.adminDashBoardLink || "",
        gitClient: data?.gitClient,
        gitServer: data?.gitServer,
        adminEmail: data?.adminEmail || "",
        adminPassword: data?.adminPassword || "",
      };

      const res = (await UpdateWork({
        id: project?._id,
        data: updateProjectInFo,
      })) as any;
  
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
              {/* <ModalHeader className="text-center">Edit Your </ModalHeader> */}
              <ModalBody>
                <PForm onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <h1 className="text-center text-xl my-2">
                      Update Your Project
                    </h1>
                    {/* Required fields */}
                    <div className="flex items-center gap-2">
                      <PInput name="name" label="Project Name" required defaultvalue={project?.name}/>
                      <PInput
                        name="thumble"
                        label="Thumbnail Image URL"
                        required
                        defaultvalue={project?.thumble}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <PInput name="image" label="Project Image URL" defaultvalue={project?.image} required />
                      <PInput
                        name="livesiteClient"
                        label="Live Client URL"
                        defaultvalue={project?.livesiteClient}
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <PInput
                        name="livesiteServer"
                        label="Live Server URL"
                        defaultvalue={project?.livesiteServer}
                        required
                      />
                      <PInput
                        name="adminDashBoardLink"
                        label="Admin Dashboard URL"
                        defaultvalue={project?.adminDashBoardLink}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <PInput
                        name="gitClient"
                        label="GitHub Client Repo URL"
                        defaultvalue={project?.gitClient}
                        required
                      />
                      <PInput
                        name="gitServer"
                        label="GitHub Server Repo URL"
                        defaultvalue={project?.gitServer}
                        required
                      />{" "}
                    </div>
                    <div className="flex items-center gap-2">
                      <PInput name="adminEmail" label="Admin Email" defaultvalue={project?.adminEmail}/>
                      <PInput
                        name="adminPassword"
                        label="Admin Password"
                        type="text"
                        defaultvalue={project?.adminPassword}
                      />
                    </div>
                    {/* Array inputs for features and technologies */}
                    <div className="flex gap-2 items-center">
                      <PTextArea
                        name="details"
                        label="Project Details"
                        defaultvalue={project?.details}
                        required
                      />
                    </div>
{" "}
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
