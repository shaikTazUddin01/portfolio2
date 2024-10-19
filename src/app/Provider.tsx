'use client'
// import FooterNav from "@/components/navbar/FooterNav";
import React, { ReactNode, useEffect } from "react";
import MainNav from "@/components/navbar/MainNav";
import FooterNav from "@/components/navbar/FooterNav";
import WelcomePage from "@/components/ui/WelcomePage";
// import { WelcomeMessage } from "@/components/ui/WelcomePage";
const Provider = ({ children }: { children: ReactNode }) => {


  useEffect(()=>{
    setTimeout(() => {
      return <WelcomePage/>
    }, 2000);
  },[])

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
