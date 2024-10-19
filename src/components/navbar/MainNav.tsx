'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import HandleHashScroll from "@/utils/HandleHashScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HandleHashScrollOutSiteHome from "@/utils/HandleNavigateOutSiteHome";

export default function MainNav() {

  const pathname=usePathname()

  return (
    <Navbar maxWidth="xl" className="px-0" >
        <Link href={'/'}>
      <NavbarBrand className="text-default-50">
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
        </Link>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {
            pathname =='/' ?
         <HandleHashScroll label="Get In Touch" targetId="#contact"/>
         :
         <HandleHashScrollOutSiteHome label="Go To Back" targetId="#portfolio"/>
          }
        
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}