"use client";
import { useGetBlogQuery } from "@/redux/feature/blog/blogApi";
import SectionTitle from "../SectionTitle/Title";
import { IBlog } from "@/type/blog";
import { Button } from "@nextui-org/react";
import stripHtml from "@/utils/stripHtml";
import moment from "moment";
// import bgLine from "@/assets/bg-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import BlogCardHome from "./Loading/BlogCardHome";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
  const { data: blogs, isLoading } = useGetBlogQuery(undefined);
  const myBlogs = blogs?.data;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative">
      <div className="py-20 max-w-7xl mx-auto px-5" id="blog">
        <div data-aos="zoom-in" data-aos-duration="500">
          <SectionTitle headerText="Blogs" title="Blogs" />
        </div>

        {isLoading && (
          <div
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[350px] overflow-hidden gap-5"
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            {Array(3)
              .fill(null)
              ?.map((_, idx) => (
                <>
                  <BlogCardHome key={idx} />
                </>
              ))}
          </div>
        )}

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper mt-6"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {myBlogs?.map((blog: IBlog) => (
            <SwiperSlide key={blog?._id}>
              <div
                className="object-cover h-[350px] w-full rounded-xl border-primaryColor border-1 shadow"
                style={{
                  backgroundImage: `url(${blog?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="zoom-in-up"
                data-aos-duration="500"
              >
                <div className="bg-[#050505b3] h-[350px] w-full rounded-xl relative p-5 flex flex-col justify-between">
                  <div>
                    <Button
                      className="border text-default-100 text-sm font-semibold py-1 px-3"
                      variant="bordered"
                    >
                      {blog?.tag}
                    </Button>
                  </div>
                  <div className="absolute bottom-6 left-5">
                    <h1 className="text-white text-2xl font-bold">
                      {blog?.title}
                    </h1>
                    <p className="text-sm text-white mt-1">
                      {stripHtml(blog?.description, 100)}
                      <Link href={`/blog/${blog?._id}`}>
                        <span className="ml-1 font-semibold text-primaryColor">
                          more...
                        </span>
                      </Link>
                    </p>
                    <p className="text-white mt-2">
                      {moment(blog?.createdAt).format("LL")}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end">
          <Link href="/blog">
            <Button className="flex items-center gap-1 border-none bg-transparent text-default-100">
              <p className="text-lg">show all</p>
              <span className="text-2xl">
                <MdOutlineArrowRightAlt />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      {/* <div
    className="absolute w-full h-full inset-0 bg-cover bg-center opacity-5 z-1"
    style={{ backgroundImage: `url(${bgLine.src})` }}
  ></div> */}
    </div>
  );
};

export default Blog;
