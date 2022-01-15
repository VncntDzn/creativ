import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LandingText from "./LandingText";
import LandingPoster from "./LandingPoster";

const LandingPage = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: `linear-gradient(90deg, #eee 1%, transparent 1%) 1px 0, #fff`,
        backgroundSize: `250px 1px`,
        backgroundPosition: `-19px -19px`,
      }}
    >
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
