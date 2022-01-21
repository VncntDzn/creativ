import { Box, Typography } from "@mui/material";

const HEADER_FONT_STYLE = {
  xs: 22,
  sm: 35,
  md: 30,
  lg: 32,
  xl: 40,
};
const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const LandingText = () => {
  return (
    <Box display="flex" flexDirection="column" marginTop={-20}>
      <Typography
        fontFamily={FONT_MERRIWEATHER}
        fontWeight={600}
        sx={{
          textAlign: { xs: "center" },
          fontSize: HEADER_FONT_STYLE,
        }}
      >
        We provide creative solutions <br />{" "}
        <Typography
          component="span"
          fontFamily={FONT_MERRIWEATHER}
          fontWeight={600}
          sx={{
            fontSize: HEADER_FONT_STYLE,
            backgroundColor: "#ce7831",
            textAlign: { xs: "center" },
          }}
        >
          for YOUR SUCCESS!
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        fontFamily={FONT_MERRIWEATHER}
        sx={{
          textAlign: { xs: "center" },
          fontSize: { xs: 15, md: 18 },
        }}
      >
        Your Idea. Our Technology.
      </Typography>
    </Box>
  );
};

export default LandingText;
