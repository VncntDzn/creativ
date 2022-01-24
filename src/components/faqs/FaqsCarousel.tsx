import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const FaqsCarousel = () => {
  return (
    <Box marginY={5} padding={5} sx={{ marginX: { lg: "10rem" } }}>
      <Carousel showIndicators={false} showThumbs={false} showArrows={false}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding={2}
        >
          <Card
            raised
            sx={{
              width: "fit-content",
              alignSelf: "flex-start",
              padding: 3,
              borderRadius: "10px 0",
            }}
          >
            <Typography textAlign="left">What can you offer to me?</Typography>
          </Card>
          <Card
            raised
            sx={{
              backgroundColor: "#ce7831",
              color: "white",
              width: { lg: "30vw" },
              alignSelf: "flex-end",
              padding: 3,
              borderRadius: "10px 0",
              marginY: 5,
            }}
          >
            <Typography textAlign="left">
              We can offer you free consultation and free development
            </Typography>
          </Card>
        </Box>
        <div>
          <p className="ss">ss 2</p>
        </div>
        <div>
          <p className="ss">Legend 3</p>
        </div>
      </Carousel>
    </Box>
  );
};

export default FaqsCarousel;
