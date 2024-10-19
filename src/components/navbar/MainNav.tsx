import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import HandleHashScroll from "@/utils/HandleHashScroll";

export default function MainNav() {


  return (
    <Navbar maxWidth="xl" className="px-0" >
      <NavbarBrand className="text-default-50">
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
         <HandleHashScroll label="Contact Me" targetId="#contact"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}