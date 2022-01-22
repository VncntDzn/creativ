import { Grid, Box, Typography } from "@mui/material";
import SectionHeader from "components/common/SectionHeader";
import AboutUsPoster from "./AboutUsPoster";
import AboutUsTexts from "./AboutUsTexts";

const Projects = () => {
  return (
    <Box marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Projects" subtitle="Take a look on our projects." />

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

export default Projects;
