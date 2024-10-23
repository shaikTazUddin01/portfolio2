"use client";
import { AcmeLogo } from "@/components/navbar/AcmeLogo";
import { AdminNavOptions } from "@/constant/adminNavOptions";
import Link from "next/link";


const AdminSidebar = () => {
  return (
    <div className="bg-[#212020] min-h-screen p-5 w-full text-default-100">
      <div>
        <Link href={"/"} className="flex items-center " >
          <AcmeLogo />
          <p className="font-bold text-inherit">SKTU</p>
        </Link>
      </div>
      <div className="mt-5">
        <ul className="">
          {AdminNavOptions?.map((item) => {
            return (
              <Link href={item?.href} key={item?.label}>
                <li className="flex items-center gap-1 hover:bg-default-700 py-2 rounded-md mb-1 px-1">
                  <span className="text-2xl">{item?.icon}</span>
                  {item?.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default AdminSidebar;
