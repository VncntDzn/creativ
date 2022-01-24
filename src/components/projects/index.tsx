import { Grid, Box, Typography, Icon, Divider } from "@mui/material";
import SectionHeader from "components/common/SectionHeader";
import ProjectPoster from "./ProjectPoster";
import ProjectTexts from "./ProjectTexts";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import texts from "./utils/texts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Projects = () => {
  return (
    <Box marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Projects" subtitle="Take a look on our projects." />

      <CarouselProvider
        totalSlides={texts.length}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        infinite={true}
        isPlaying={true}
      >
        <Box
          sx={{
            height: { xs: "55rem", sm: "35rem", lg: "50rem" },
          }}
        >
          <Slider style={{ height: "100%" }}>
            {texts.map(({ title, id }) => (
              <Slide index={0} key={title}>
                <Box display="flex" justifyContent="space-between">
                  <Typography alignSelf="center">{title}</Typography>
                  <Box
                    marginTop={2}
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{
                      width: { xs: "35%", sm: "15%", lg: "13%", xl: "8%" },
                    }}
                  >
                    <ButtonBack
                      style={{
                        background: "none",
                        border: "1px solid",
                        borderRadius: "50%",
                        height: "3rem",
                        width: "3rem",
                      }}
                    >
                      <Icon>
                        <ArrowBackIosNewIcon />
                      </Icon>
                    </ButtonBack>
                    <ButtonNext
                      style={{
                        background: "none",
                        border: "1px solid",
                        borderRadius: "50%",
                        height: "3rem",
                        width: "3rem",
                        zIndex: 1,
                      }}
                    >
                      <Icon>
                        <ArrowForwardIosIcon />
                      </Icon>
                    </ButtonNext>
                  </Box>
                </Box>
                <Divider sx={{ paddingBottom: 1 }} />
                <Grid container marginTop={10}>
                  <Grid item sm={6} lg={6} container justifyContent="center">
                    <ProjectPoster />
                  </Grid>
                  <Grid item sm={6} lg={6} sx={{ paddingRight: { sm: 1 } }}>
                    <ProjectTexts />
                  </Grid>
                </Grid>
              </Slide>
            ))}
          </Slider>
        </Box>
      </CarouselProvider>
    </Box>
  );
};

export default Projects;
