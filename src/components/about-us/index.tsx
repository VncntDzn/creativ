import { Grid, Box, Typography } from "@mui/material";
import SectionHeader from "components/common/SectionHeader";
import AboutUsPoster from "./AboutUsPoster";
import AboutUsTexts from "./AboutUsTexts";
const HEADER_FONT_STYLE = {
  xs: 22,
  sm: 35,
  md: 30,
  lg: 32,
  xl: 40,
};
const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const AboutUs = () => {
  return (
    <Box marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader
        title="About Us"
        subtitle="We are more than a freelance team."
      />

      <Grid container marginTop={10}>
        <Grid item lg={6} container justifyContent="center">
          <AboutUsPoster />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AboutUsTexts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
