import MainNav from "@/components/navbar/MainNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
};

export default layout;
