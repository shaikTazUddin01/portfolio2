"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import HandleHashScroll from "@/utils/HandleHashScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HandleHashScrollOutSiteHome from "@/utils/HandleNavigateOutSiteHome";

export default function MainNav() {
  return (
    <Navbar maxWidth="xl" className="px-0">
      <Link href={"/"}>
        <NavbarBrand className="text-default-50">
          <AcmeLogo />
          <p className="font-bold text-inherit">SKTU</p>
        </NavbarBrand>
      </Link>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href={"/blog"}>
            <Button variant="bordered" className="text-default-100">
              Blog
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
