import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import HandleHashScroll from "@/utils/HandleHashScroll";
import Link from "next/link";

export default function MainNav() {


  return (
    <Navbar maxWidth="xl" className="px-0" >
      <NavbarBrand className="text-default-50">
        <Link href={'/'}>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
         <HandleHashScroll label="Get In Touch" targetId="/#contact"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}