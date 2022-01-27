import { Divider, Grid, Box, Typography } from "@mui/material";
import LandingText from "./LandingText";
import team from "lottie/team.json";
import LottiePoster from "components/common/LottiePoster";

const LandingPage = () => {
  return (
    <Box position="relative">
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          display: { xs: "none", md: "flex" },
          height: { xs: "none", md: "100%" },
          position: "absolute",
        }}
      >
        <Typography textAlign={"left"} sx={{ writingMode: "vertical-rl" }}>
          CreatiV Strategies & Solutions
        </Typography>
      </Divider>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: { xs: 25, md: 5, lg: 10 },
        }}
      >
        <Grid item md={8} lg={6}>
          <LandingText />
        </Grid>

        <Grid item md={4} lg={6} sx={{ marginTop: { md: 10 } }}>
          <LottiePoster width={"45vw"} file={team} />
        </Grid>
      </Grid>
      <Divider
        flexItem
        sx={{ marginLeft: "1.4rem", display: { xs: "none", md: "block" } }}
      />
    </Box>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
