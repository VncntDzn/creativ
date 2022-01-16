import { Box, Typography } from "@mui/material";

const LandingText = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      marginTop={5}
    >
      <Typography
        fontFamily="Merriweather, sans-serif"
        textAlign="center"
        fontWeight={600}
        fontSize={22}
      >
        We provide creative solutions <br />{" "}
        <Typography
          component="span"
          fontFamily="Merriweather, sans-serif"
          textAlign="center"
          fontWeight={600}
          fontSize={22}
          sx={{backgroundColor: '#1ecbe1'}}
        >
          for YOUR SUCCESS!
        </Typography>
      </Typography>
      <Typography variant="h6" fontSize={20} fontFamily="Open Sans sans-serif">
        Your Idea. Our Technology.
      </Typography>
    </Box>
  );
};

export default LandingText;
