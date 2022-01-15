import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import Software from "lottie/software.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Software,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LandingPoster = () => {
  return (
    <div style={{border:'3px solid'}}>
      <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
    </div>
  );
};

LandingPoster.propTypes = {};

export default LandingPoster;
