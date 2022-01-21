import Lottie from "react-lottie";
import writing from "lottie/writing.json";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: writing,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const AboutUsPoster = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ marginTop: { xs: -8, sm: -15 } }}>
      <Lottie width={`${matches ? "25vw" : "100%"}`} options={defaultOptions} />
    </Box>
  );
};

export default AboutUsPoster;
