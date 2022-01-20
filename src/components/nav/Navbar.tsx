import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import links from "./utils/links";
import ActiveLink from "components/common/ActiveLink";
import { Box } from "@mui/system";
import { Divide as Hamburger } from "hamburger-react";
import { useToggle } from "hooks";

const Navbar = () => {
  const [toggle, handleToggle] = useToggle();
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      zIndex={1}
    >
      <Hamburger
        hideOutline
        direction="right"
        size={23}
        color="#ce7831"
        toggled={toggle}
        toggle={() => handleToggle(!toggle)}
      />

      {/* {toggle && (
        <Box
          position="absolute"
          right={-10}
          height="100vh"
          width="50vw"
          zIndex={-1}
          sx={{
            paddingTop: 10,
            background: "white",
            width: { lg: "30vw" },
            right: { lg: "-15vw" },
            border: "3px solid green",
          }}
        >
          {links.map(({ name, href }) => (
            <Box display="flex" top={"10vh"} key={name}>
              <ActiveLink href={href}>{name}</ActiveLink>
            </Box>
          ))}
        </Box>
      )} */}
    </Box>
  );
};

Navbar.propTypes = {};

export default Navbar;
