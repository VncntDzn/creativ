import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import dev from "lottie/dev.json";
import { Box } from "@mui/material";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dev,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LandingPoster = () => {
  return (
    <Box>
      <Lottie options={defaultOptions} height="100%" width={"100%"} />
    </Box>
  );
};

LandingPoster.propTypes = {};

export default LandingPoster;
