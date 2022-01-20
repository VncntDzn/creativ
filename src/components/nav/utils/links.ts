export interface LinkProps {
  name: string;
  href: string;
}

const links: Readonly<LinkProps[]> = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/#about-us",
  },
  {
    name: "Projects",
    href: "/#project",
  },
 /*  {
    name: "Contact Us",
    href: "/#contact-us",
  }, */
];
export default links;
