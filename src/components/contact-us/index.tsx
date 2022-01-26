import { Grid, Box, Typography } from "@mui/material";
import SectionHeader from "components/common/SectionHeader";
import ContactUsPoster from "./ContactUsPoster";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <Box id="contact-us" marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Contact Us" subtitle="Let us connect with you." />

      <Grid container marginTop={10}>
        <Grid item lg={6} container justifyContent="center">
          <ContactUsPoster />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
