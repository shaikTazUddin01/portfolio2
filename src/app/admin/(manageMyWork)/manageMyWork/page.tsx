"use client";
import UpdateWork from "@/components/admin/manageWork/UpdateWork";
import {
  useDeleteMyWorkMutation,
  useGetMyWorkQuery,
} from "@/redux/feature/Mywork/MyworkApi";
import { TPortfolio } from "@/type/portfolio";
import {
  Button,
  Image,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageMyork = () => {
  const { data, isLoading: isworkLoading } = useGetMyWorkQuery(undefined);
  const [deleteWork] = useDeleteMyWorkMutation();
  const myWorks = data?.data;

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You wont to delete this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const toastId = toast.loading("deleting...");
          const res = (await deleteWork(id)) as any;
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
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Project Name</TableColumn>
          <TableColumn>Live Site(FrontEnd)</TableColumn>
          <TableColumn>Live Site(BackEnd)</TableColumn>
          <TableColumn>GitHub(FrontEnd)</TableColumn>
          <TableColumn>GitHub(BackEnd)</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {/* loading state */}
          {isworkLoading
            ? Array(6)
                .fill(null)
                .map((_, idx) => (
                  <TableRow key={idx}>
                    {Array(6)
                      .fill(null)
                      .map((_, idx) => (
                        <TableCell key={idx}>
                          <div className="bg-gray-200 rounded-md w-full h-8 animate-pulse"></div>
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            : // show table data
              myWorks?.map((myWork: TPortfolio) => (
                <TableRow key={myWork?._id}>
                  <TableCell className="flex items-center gap-1">
                    <span>
                      <p>{myWork?.name}</p>
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="hover:text-blue-600"
                      target="_blank"
                      href={myWork?.livesiteClient}
                    >
                      {myWork?.livesiteClient}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      target="_blank"
                      className="hover:text-blue-600"
                      href={myWork?.livesiteServer}
                    >
                      {myWork?.livesiteServer}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      target="_blank"
                      className="hover:text-blue-600"
                      href={myWork?.gitClient}
                    >
                      {myWork?.gitClient}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      target="_blank"
                      className="hover:text-blue-600"
                      href={myWork?.gitServer}
                    >
                      {myWork?.gitServer}
                    </Link>
                  </TableCell>
                  {/* action */}
                  <TableCell>
                    <div className="flex justify-center items-center gap-2 text-xl ">
                      <UpdateWork project={myWork}/>
                      <Button
                        className="text-red-600 border-red-600 text-xl"
                        variant="bordered"
                        size="sm"
                        onClick={() => handleDelete(myWork?._id as string)}
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

export default ManageMyork;
