import Lottie from "react-lottie";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface LottiePosterProps {
  file: any;
  width: string | number;
}
const LottiePoster = ({ file, width }: LottiePosterProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const DEFAULT_OPTIONS = {
    loop: true,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box sx={{ marginTop: { xs: -8, sm: -15 } }}>
      <Lottie width={`${matches ? width : "100%"}`} options={DEFAULT_OPTIONS} />
    </Box>
  );
};

export default LottiePoster;
