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
    href: "#about-us",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];
export default links;
