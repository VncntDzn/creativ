import { Divider, Grid, Box, Typography } from "@mui/material";
import LandingText from "./LandingText";
import LandingPoster from "./LandingPoster";
import MuiGrid from "@mui/material/Grid";

const LandingPage = () => {
  return (
    <>
      <Box
        display="flex"
        position="relative"
        sx={{ marginTop: { xs: 25, md: 10, lg: 0 } }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "40vh", marginRight: 2.5 }}
          />
          <Divider orientation="vertical" flexItem sx={{ height: "50vh" }}>
            <Typography textAlign={"left"} sx={{ writingMode: "vertical-rl" }}>
              CreatiV Strategies & Solutions
            </Typography>
          </Divider>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={8} lg={6}>
            <LandingText />
          </Grid>

          <Grid item md={4} lg={6}>
            <LandingPoster />
          </Grid>
        </Grid>
      </Box>
      <Divider flexItem sx={{ marginLeft: "2%", display: {xs: 'none', md: 'block'} }} />
    </>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
