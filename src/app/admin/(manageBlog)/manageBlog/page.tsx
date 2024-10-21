"use client";

import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import { IBlog } from "@/type/blog";
import stripHtml from "@/utils/stripHtml";
import {
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

const ManageBlog = () => {
  const { data, isLoading: isBlogLoading } = useGetBlogQuery(undefined);
  const blogs = data?.data;
//   console.log(blogs);



  return (
    <div className="p-10">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Blog No.</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn >Descriiption</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {/* loading state */}
          {isBlogLoading
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
                  <TableCell width={10}>
                    <div>
                    {stripHtml(blog?.description,100)}
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
