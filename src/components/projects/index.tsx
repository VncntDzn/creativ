import { Grid, Box, Typography, Icon, Divider } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SectionHeader from "components/common/SectionHeader";
import ProjectPoster from "./ProjectPoster";
import ProjectTexts from "./ProjectTexts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ProjectPosterProps } from "./types";
const HEADER_FONT_STYLE = {
  xs: 22,
  sm: 35,
  md: 30,
  lg: 32,
};
const FONT_MERRIWEATHER = "Merriweather, sans-serif";
const BUTTON_STYLE = {
  background: "none",
  border: "1px solid",
  borderRadius: "50%",
  height: "3rem",
  width: "3rem",
};

interface ProjectsProps {
  projects: any;
}
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Box id="projects" marginTop={5} sx={{ paddingX: { lg: 3 } }}>
      <SectionHeader title="Projects" subtitle="Take a look on our projects." />
      <CarouselProvider
        totalSlides={projects?.length}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        infinite={true}
        isPlaying={true}
      >
        <Box
          marginTop={5}
          sx={{
            height: { xs: "55rem", sm: "35rem", lg: "50rem" },
          }}
        >
          <Slider style={{ height: "100%" }}>
            {projects.map(
              ({ title, image, answers, url }: ProjectPosterProps) => (
                <Slide index={0} key={title}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      alignSelf="center"
                      fontFamily={FONT_MERRIWEATHER}
                      fontSize={HEADER_FONT_STYLE}
                    >
                      {title}
                    </Typography>
                    <Box
                      marginTop={2}
                      display="flex"
                      justifyContent="space-evenly"
                      alignItems="center"
                      sx={{
                        width: { xs: "35%", sm: "15%", lg: "13%", xl: "8%" },
                      }}
                    >
                      <ButtonBack style={BUTTON_STYLE}>
                        <Icon>
                          <ArrowBackIosNewIcon />
                        </Icon>
                      </ButtonBack>
                      <ButtonNext style={BUTTON_STYLE}>
                        <Icon>
                          <ArrowForwardIosIcon />
                        </Icon>
                      </ButtonNext>
                    </Box>
                  </Box>
                  <Divider sx={{ paddingBottom: 1 }} />
                  <Grid container marginTop={10} spacing={2}>
                    <Grid item sm={6} lg={6} container justifyContent="center">
                      <ProjectPoster title={title} image={image} />
                    </Grid>
                    <Grid
                      item
                      sm={6}
                      lg={6}
                      container
                      sx={{
                        paddingRight: { sm: 1 },
                        marginTop: { xs: 5, sm: 0 },
                        height: "100%",
                      }}
                    >
                      <ProjectTexts answers={answers} url={url} />
                    </Grid>
                  </Grid>
                </Slide>
              )
            )}
          </Slider>
        </Box>
      </CarouselProvider>
    </Box>
  );
};

export default Projects;
