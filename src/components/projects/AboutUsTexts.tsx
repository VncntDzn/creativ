import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Typography } from "@mui/material";
import texts from "./utils/texts";

const AboutUsTexts = () => {
  return (
    <Box>
      {texts.map(({ title, paragraph }) => (
        <Box key={title}>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography sx={{ textAlign: "justify", textJustify: "inter-word" }}>
            {paragraph}
          </Typography>
          <Divider flexItem />
        </Box>
      ))}
    </Box>
  );
};

AboutUsTexts.propTypes = {};

export default AboutUsTexts;
