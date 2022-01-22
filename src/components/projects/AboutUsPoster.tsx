import Lottie from "react-lottie";
import two_people from "lottie/two_people.json";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: two_people,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const AboutUsPoster = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ marginTop: { xs: -8, sm: -15 } }}>
      <Lottie width={`${matches ? "48vw" : "100%"}`} options={defaultOptions} />
    </Box>
  );
};

export default AboutUsPoster;
