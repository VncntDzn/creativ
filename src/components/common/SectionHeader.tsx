import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle: string | number;
}
const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <Box>
      <Typography
        fontSize={25}
        variant="h5"
        fontFamily="Merriweather, sans-serif"
      >
        {title}
      </Typography>
      <Typography
        fontSize={20}
        variant="h5"
        fontFamily="Merriweather, sans-serif"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

SectionHeader.propTypes = {};

export default SectionHeader;
