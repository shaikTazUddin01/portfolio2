"use client";
import { AcmeLogo } from "@/components/navbar/AcmeLogo";
import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
// import { Example } from "./animatedSIdebar/Example";
// import "./style.css";

const AdminSidebar = () => {
  return (
    <div className="bg-default-200 min-h-screen p-5">
        <div >
      <Link href={"/"} className="flex items-center">
          <AcmeLogo />
          <p className="font-bold text-inherit">SKTU</p>
      </Link>
        </div>
      <div className="mt-5">
        <ul>
          <Link href={"/admin/createMyWork"}>
            <li className="flex items-center gap-1 hover:bg-default-300 py-2 rounded-md">
              <span className="text-2xl">
                <MdOutlineManageAccounts />
              </span>
              Create Work
            </li>
          </Link>
          <Link href={"/admin/manageMyWork"}>
            <li className="flex items-center gap-1 hover:bg-default-300 py-2 rounded-md">
              <span className="text-2xl">
                <MdOutlineManageAccounts />
              </span>
              Manage Work
            </li>
          </Link>
          <Link href={"/admin/createBlog"}>
            <li className="flex items-center gap-1 hover:bg-default-300 py-2 rounded-md">
              <span className="text-2xl">
                <MdOutlineManageAccounts />
              </span>
              Create Blog
            </li>
          </Link>
          <Link href={"/admin/manageBlog"}>
            <li className="flex items-center gap-1 hover:bg-default-300 py-2 rounded-md">
              <span className="text-2xl">
                <MdOutlineManageAccounts />
              </span>
              Manage Blog
            </li>
          </Link>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default AdminSidebar;
