import { Box, Typography } from "@mui/material";

const LandingText = () => {
  return (
    <Box display="flex" flexDirection="column" marginTop={-20}>
      <Typography
        fontFamily="Merriweather, sans-serif"
        fontWeight={600}
        sx={{
          textAlign: { xs: "center" },
          fontSize: { xs: 22, sm: 35, md: 30, lg: 32, xl: 40 },
        }}
      >
        We provide creative solutions <br />{" "}
        <Typography
          component="span"
          fontFamily="Merriweather, sans-serif"
          fontWeight={600}
          sx={{
            fontSize: { xs: 22, sm: 35, md: 30, lg: 32 ,xl: 40},
            backgroundColor: "#8be4f0",
            textAlign: { xs: "center" },
          }}
        >
          for YOUR SUCCESS!
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Merriweather, sans-serif"
        sx={{
          textAlign: { xs: "center" },
          fontSize: { xs: 20  },
        }}
      >
        Your Idea. Our Technology.
      </Typography>
    </Box>
  );
};

export default LandingText;
