import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import AboutUsPoster from "./AboutUsPoster";
import AboutUsTexts from "./AboutUsTexts";

const AboutUs = () => {
  return (
    <Grid container>
      <Grid item>
        <AboutUsPoster />
      </Grid>
      <Grid item>
        <AboutUsTexts />
      </Grid>
    </Grid>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
