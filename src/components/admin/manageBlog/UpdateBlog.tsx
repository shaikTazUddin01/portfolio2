import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import { useUpdateBlogMutation } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";

import Debounce from "@/utils/Debounce";
import QuillEditor from "@/utils/QuillEditor";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { RiEdit2Fill } from "react-icons/ri";
import { toast } from "sonner";

export default function UPdateBlog({ blog }: { blog: IBlog }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [updateBlog] =useUpdateBlogMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // if (data?.name && data?.estimate) {

      const UpdateBlogData = {
        title: data?.title,
        image: data?.image,
        tag: data?.tag,
      };

      console.log(UpdateBlogData);
      const toastId = toast.loading("updating...");
      const res = (await updateBlog({
        id: blog?._id,
        data: UpdateBlogData,
      })) as any;

      if (res?.data) {
        toast.success(" Update success", { id: toastId,duration:500 });
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
                    <h1 className="text-center text-xl my-2">Update Blog</h1>
                    <PInput
                      name="title"
                      label="Blog Title"
                      defaultvalue={blog?.title}
                      required
                    />
                    <PInput
                      name="image"
                      defaultvalue={blog?.image}
                      label="Image URL"
                      required
                    />
                    <PInput
                      name="tag"
                      label="Blog Tag"
                      defaultvalue={blog?.tag}
                      required
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
