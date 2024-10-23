"use client";
// import { AcmeLogof } from "@/components/navbar/AcmeLogo";
import { toggleBtn } from "@/redux/feature/toggle/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";

const ToggleSidebar = () => {
  const dispatch = useAppDispatch();
  const { toggle } = useAppSelector((state) => state?.toggle);

  const handleCloseSidebar = () => {
    dispatch(toggleBtn(false));
  };
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";   
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  return (
    <div className={`relative w-full ${toggle && "bg-[#3d3d3d96] translate-x-0  h-screen"}`}>
      <div
        className={`bg-[#212020] text-default-100 min-h-screen p-5 w-[80%] md:w-[40%] transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } lg:w-[50%]`}
      >
       

        {/* Sidebar Links */}
        <div className="">
          <ul className="space-y-4">
            <li>
              <Link href="/admin/createMyWork" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Create Work</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/manageMyWork" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Manage Work</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/createBlog" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Create Blog</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/manageBlog" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Manage Blog</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/createSkill" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Create Skill</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/manageSkill" onClick={handleCloseSidebar}>
                <div className="flex items-center gap-2 hover:bg-default-700 p-3 rounded-md transition-colors">
                  <MdOutlineManageAccounts className="text-2xl" />
                  <span>Manage Skill</span>
                </div>
              </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToggleSidebar;
