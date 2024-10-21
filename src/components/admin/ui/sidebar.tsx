import { AcmeLogo } from "@/components/navbar/AcmeLogo";
import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";

const AdminSidebar = () => {
  return (
    <div className="bg-default-200 min-h-screen p-5">
      <div className="flex items-center ">
        <AcmeLogo />
        <p className="font-bold text-inherit">SKTU</p>
      </div>
      <div className="mt-5">
        <ul>
            <Link href={"/admin/myWorkManagement"}>
          <li className="flex items-center gap-1 hover:bg-default-300 py-2 rounded-md">
              <span className="text-2xl">
                <MdOutlineManageAccounts />
              </span>
              MyWork Management
          </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
