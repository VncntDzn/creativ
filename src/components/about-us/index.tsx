import { Grid, Box } from "@mui/material";
import two_people from "lottie/two_people.json";
import LottiePoster from "components/common/LottiePoster";
import SectionHeader from "components/common/SectionHeader";
import AboutUsTexts from "./AboutUsTexts";

const AboutUs = () => {
  return (
    <Box id="about-us" marginTop={5}>
      <SectionHeader
        title="About Us"
        subtitle="We are more than a freelance team."
      />

      <Grid container spacing={2} marginTop={10}>
        <Grid item sm={6} lg={6} container justifyContent="center">
          <LottiePoster width={"48vw"} file={two_people} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <AboutUsTexts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
