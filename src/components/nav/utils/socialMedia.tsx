import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkProps } from "./links";
import { ReactElement } from "react";

export interface SocMedProps extends LinkProps {
  icon: ReactElement
}
const socialMedia: SocMedProps[] = [
  {
    name: "Facebook",
    href: "/facebook",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    href: "/instagram",
    icon: <InstagramIcon />,
  },
  {
    name: "Twitter",
    href: "/twitter",
    icon: <TwitterIcon />,
  },
];

export default socialMedia;