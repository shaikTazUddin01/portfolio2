import AdminSidebar from "@/components/admin/ui/sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex mx-auto bg-default-50">
      <div className="w-[20%]">
        <AdminSidebar/>
      </div>
      <div className="min-h-screen w-[80%]">{children}</div>
    </div>
  );
};

export default layout;
