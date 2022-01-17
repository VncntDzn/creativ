import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LandingText from "./LandingText";
import LandingPoster from "./LandingPoster";

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item sm={6}  lg={5} sx={{ width: "100vw" }}>
        <LandingText />
      </Grid>
      <Grid item sm={6}  lg={7}>
        <LandingPoster />
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
