import { Grid, Box, Typography } from "@mui/material";
import SectionHeader from "../common/SectionHeader";

const Faqs = () => {
  return (
    <Box marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Faqs" subtitle="Let us answer your possible questions." />
    </Box>
  );
};

export default Faqs;
