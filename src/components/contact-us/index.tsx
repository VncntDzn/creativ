import { Grid, Box } from "@mui/material";
import writing from "lottie/writing.json";
import SectionHeader from "components/common/SectionHeader";
import ContactUsForm from "./ContactUsForm";
import LottiePoster from "components/common/LottiePoster";

const ContactUs = () => {
  return (
    <Box id="contact-us" marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Contact Us" subtitle="Let us connect with you." />

      <Grid container marginTop={10}>
        <Grid item lg={6} container justifyContent="center">
          <LottiePoster width={"25vw"} file={writing} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
