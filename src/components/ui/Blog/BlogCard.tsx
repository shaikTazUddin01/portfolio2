import { IBlog } from "@/type/blog";
import stripHtml from "@/utils/stripHtml";
import { Button, Image } from "@nextui-org/react";
import moment from "moment";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-[#111111] rounded">
      <div
        className="object-cover h-[350px] w-full  bg-cover  bg-center shadow-xl"
        style={{
          backgroundImage: `url(${blog?.image})`,
        }}
      ></div>

      <div className="text-default-100 p-5">
        <h1 className="text-xl font-medium">{blog?.title}</h1>
        <p className="text-[13px] text-default-400 pb-2 font-medium"># {blog?.tag}</p>
        <p>
          {stripHtml(blog?.description, 150)}
          <Link href={`/blog/${blog?._id}`}>
          <span className="ml-1 font-semibold text-primaryColor">more...</span>
          </Link>
        </p>
        <p className=" mt-2">{moment(blog?.createdAt).format("LL")}</p>
      </div>
    </div>
  );
};

export default BlogCard;
