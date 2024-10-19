// import FooterNav from "@/components/navbar/FooterNav";
import React, { ReactNode } from "react";
import MainNav from "@/components/navbar/MainNav";
import FooterNav from "@/components/navbar/FooterNav";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MainNav />
      <div className="min-h-screen text-default-50">{children}</div>
      <div className="fixed bottom-3 flex justify-center w-full z-50">
        <FooterNav />
      </div>
    </div>
  );
};

export default Provider;
