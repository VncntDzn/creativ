import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import links from "../utils/links";
import ActiveLink from "components/common/ActiveLink";
const DesktopNavbar = () => {
  return (
    <Box display="flex">
      {links.map(({ name, href }) => (
        <Box display="flex" key={name}>
          <ActiveLink href={href}>{name}</ActiveLink>
        </Box>
      ))}
    </Box>
  );
};

DesktopNavbar.propTypes = {};

export default DesktopNavbar;
