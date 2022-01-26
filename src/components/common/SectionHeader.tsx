import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle: string | number;
}
const HEADER_FONT_STYLE = {
  xs: 22,
  sm: 35,
  md: 30,
  lg: 32,
  xl: 40,
};
const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography
        fontFamily={FONT_MERRIWEATHER}
        fontWeight={600}
        sx={{
          textAlign: { xs: "center", lg: "left" },
          fontSize: HEADER_FONT_STYLE,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        fontFamily={FONT_MERRIWEATHER}
        sx={{
          textAlign: { xs: "center", lg: "left" },
          fontSize: { xs: 15 },
          borderBottom: "thick solid #ce7831",
          width: { xs: "fit-content" },
          alignSelf: { xs: "center", lg: "flex-start" },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

SectionHeader.propTypes = {};

export default SectionHeader;
