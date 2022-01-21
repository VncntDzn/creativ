import links from "./utils/links";
import ActiveLink from "components/common/ActiveLink";
import { Box } from "@mui/system";
import { Divide as Hamburger } from "hamburger-react";
import { useToggle } from "hooks";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

const Navbar = () => {
  const [toggle, handleToggle] = useToggle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      zIndex={1}
    >
      {matches ? <DesktopNavbar /> : <MobileNavbar />}
    </Box>
  );
};

Navbar.propTypes = {};

export default Navbar;
