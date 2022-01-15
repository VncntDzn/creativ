import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LandingText from "./LandingText";
import LandingPoster from "./LandingPoster";

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        <LandingText />
      </Grid>
      <Grid item md={6}>
        <LandingPoster />
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
