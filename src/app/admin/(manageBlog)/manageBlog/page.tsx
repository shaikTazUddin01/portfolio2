"use client";

import UPdateBlog from "@/components/admin/manageBlog/UpdateBlog";
import { useDeleteBlogMutation, useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import stripHtml from "@/utils/stripHtml";
import {
  Button,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import DOMPurify from "dompurify";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageBlog = () => {
  const { data, isLoading: isBlogLoading } = useGetBlogQuery(undefined);
  const blogs = data?.data;
const [deleteBlog]=useDeleteBlogMutation()

// handle delete
const handleDelete = async (id: string) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to delete this blog",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("deleting...");
        const res = (await deleteBlog(id)) as any;
        if (res?.data) {
          toast.success("delete success", { id: toastId, duration:500});
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
      <Table aria-label="Example static collection table ">
        <TableHeader>
          <TableColumn>Blog No.</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Tag</TableColumn>
          <TableColumn >Descriiption</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {/* loading state */}
          {isBlogLoading
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
              blogs?.map((blog: IBlog,idx:number) => (
                <TableRow key={blog?._id}>
                    <TableCell>
                        {idx+1}
                    </TableCell>
                  <TableCell>
                    {blog?.image ? (
                      <Image
                        src={blog?.image}
                        className="size-9"
                        alt={blog?.title}
                      />
                    ) : (
                      <div>No Image</div>
                    )}
                  </TableCell>
                  <TableCell >{blog?.title}</TableCell>
                  <TableCell >{blog?.tag}</TableCell>
                  <TableCell >
                    <div>
                    {stripHtml(blog?.description,100)}
                    </div>
                  </TableCell>
                  {/* action */}
                  <TableCell>
                    <div className="flex justify-center items-center gap-2 text-xl ">
                     <UPdateBlog blog={blog}/>
                      <Button
                        className="text-red-600 border-red-600 text-xl"
                        variant="bordered"
                        size="sm"
                        onClick={() => handleDelete(blog?._id as string)}
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

export default ManageBlog;
