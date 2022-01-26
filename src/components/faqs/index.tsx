import { Grid, Box, Typography } from "@mui/material";
import SectionHeader from "../common/SectionHeader";
import FaqsCarousel from "./FaqsCarousel";

const Faqs = () => {
  return (
    <Box sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Let us answer your possible questions."
      />
      <FaqsCarousel />
    </Box>
  );
};

export default Faqs;
