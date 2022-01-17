import { Box, Typography } from "@mui/material";

const LandingText = () => {
  return (
    <Box display="flex" flexDirection="column" marginTop={5}>
      <Typography
        fontFamily="Merriweather, sans-serif"
        fontWeight={600}
        sx={{
          textAlign: { xs: "center", sm: "left" },
          fontSize: { xs: 22, lg: 45 },
        }}
      >
        We provide creative solutions <br />{" "}
        <Typography
          component="span"
          fontFamily="Merriweather, sans-serif"
          fontWeight={600}
          fontSize={22}
          sx={{
            backgroundColor: "#8be4f0",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          for YOUR SUCCESS!
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        fontSize={20}
        fontFamily="Open Sans sans-serif"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        Your Idea. Our Technology.
      </Typography>
    </Box>
  );
};

export default LandingText;
