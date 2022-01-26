import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import faqs from "./utils";
const FaqsCarousel = () => {
  return (
    <Box marginY={5} padding={5} sx={{ marginX: { lg: "10rem" } }}>
      <Carousel autoPlay={true} infiniteLoop showIndicators={false} showThumbs={false} showArrows={false}>
        {faqs.map(({ id, answer, question }) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            padding={2}
            key={id}
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
              <Typography textAlign="left">{question}</Typography>
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
              <Typography textAlign="left">{answer}</Typography>
            </Card>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FaqsCarousel;
