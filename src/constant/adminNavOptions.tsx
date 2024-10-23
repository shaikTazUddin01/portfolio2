import { GrWorkshop } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import { LuCodepen } from "react-icons/lu";
import { SiAwssecretsmanager, SiGooglecampaignmanager360, SiNginxproxymanager } from "react-icons/si";

  
export const AdminNavOptions = [

  {
    label: "Create Work",
    href: "/admin/createMyWork",
    icon: <GrWorkshop/>,
  },
  {
    label: "Manage Work",
    href: "/admin/manageMyWork",
    icon: <SiAwssecretsmanager/>,
  },
  {
    label: "Create Blog",
    href: "/admin/createBlog",
    icon: <ImBlog/>,
  },
  {
    label: "Manage Blog",
    href: "/admin/manageBlog",
    icon: <SiNginxproxymanager/>,
  },
  {
    label: "Create Skill",
    href: "/admin/createSkill",
    icon: <LuCodepen/>,
  },
  {
    label: "Manage Skill",
    href: "/admin/manageSkill",
    icon: <SiGooglecampaignmanager360/>,
  },
];
