import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";

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
          <Button as={Link} className="text-default-50  bg-[#3a3a3a88]" href="#" variant="bordered" >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}