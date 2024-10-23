"use client";

import UPdateSkill from "@/components/admin/ui/manageSkill/UpdateSkill";
import { useDeleteSkillMutation, useGetskillQuery } from "@/redux/feature/skill/skillApi";
import { ISkill } from "@/type/skill";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageSkill = () => {
  const { data, isLoading: isskillLoading } = useGetskillQuery(undefined);
  const skills = data?.data;

  const [deleteSkill] = useDeleteSkillMutation();
  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You wont to delete this skill",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const toastId = toast.loading("deleting...");
          // console.log(id);
          const res = (await deleteSkill(id)) as any;
          if (res?.data) {
            toast.success("delete success", { id: toastId ,duration:500});
          } else {
            toast.error(res?.error?.data?.message, { id: toastId });
          }
        }
      });
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <Table aria-label="Example static collection table" align="center">
        <TableHeader>
          <TableColumn>Skill No.</TableColumn>
          <TableColumn>Skill Name</TableColumn>
          <TableColumn>Estimate(%)</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Skill Added Here."}>
          {/* loading state */}
          {isskillLoading
            ? Array(6)
                .fill(null)
                .map((_, idx) => (
                  <TableRow key={idx}>
                    {Array(4)
                      .fill(null)
                      .map((_, idx) => (
                        <TableCell key={idx}>
                          <div className="bg-gray-200 rounded-md w-full h-8 animate-pulse"></div>
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            : // show table data
              skills?.map((skill: ISkill, idx: number) => (
                <TableRow key={skill?._id}>
                  <TableCell>{idx + 1}</TableCell>

                  <TableCell>{skill?.name}</TableCell>
                  <TableCell>{skill?.estimate}</TableCell>
                  {/* action */}
                  <TableCell>
                    <div className="flex justify-center items-center gap-2 text-xl ">
                     <UPdateSkill skill={skill}/>
                      <Button
                        className="text-red-600 border-red-600 text-xl"
                        variant="bordered"
                        size="sm"
                        onClick={() => handleDelete(skill?._id as string)}
                      >
                        <MdDelete />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageSkill;
