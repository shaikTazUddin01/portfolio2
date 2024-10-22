import { GoHome } from "react-icons/go";
import { LuCodepen, LuUser2 } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
// import { DiCodepen } from "react-icons/di";
import { PiBookOpenUser } from "react-icons/pi";
import { AiOutlineWechatWork } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
// import { FaCodepen } from "react-icons/fa";
  
export const NavOptions = [
  // {
  //   label: "Home",
  //   href: "#home",
  //   icon: <GoHome />,
  // },
  {
    label: "About",
    href: "#about",
    icon: <LuUser2 />,
  },
  {
    label: "Education",
    href: "#education",
    icon: <HiOutlineAcademicCap />,
  },
  {
    label: "Skill",
    href: "#skill",
    icon: <LuCodepen/>,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    icon: <PiBookOpenUser />,
  },
  {
    label: "Blog",
    href: "#blog",
    icon: <ImBlog />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <AiOutlineWechatWork />,
  },
];
