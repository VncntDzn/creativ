import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import team from "lottie/team.json";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: team,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LandingPoster = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ marginTop: { xs: -8, sm: -15 } }}>
      <Lottie
        width={`${matches ? "40rem" : "100%"}`}
        options={defaultOptions}
      />
    </Box>
  );
};

LandingPoster.propTypes = {};

export default LandingPoster;
