import { Grid, Box, Typography } from "@mui/material";
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

const ContactUs = () => {
  return (
    <Box marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <Typography
        fontFamily={FONT_MERRIWEATHER}
        fontWeight={600}
        sx={{
          textAlign: { xs: "center", lg: "left" },
          fontSize: HEADER_FONT_STYLE,
        }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="h6"
        fontFamily={FONT_MERRIWEATHER}
        sx={{
          textAlign: { xs: "center", lg: "left" },
          fontSize: { xs: 15 },
        }}
      >
        We are more than a freelance team.
      </Typography>
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

export default ContactUs;
