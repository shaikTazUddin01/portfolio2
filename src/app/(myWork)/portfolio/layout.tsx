"use client";
import MainNav from "@/components/navbar/MainNav";

import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MainNav />

      <div className="min-h-screen text-default-50">{children}</div>
    </div>
  );
};

export default layout;
