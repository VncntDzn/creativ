import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "components/common/SectionHeader";
import { Box } from "@mui/material";
import CaseStudies from "./CaseStudies";

const Projects = () => {
  return (
    <Box width="100%">
      <SectionHeader subtitle="Cases" title="Our Projects" />
      <CaseStudies />
    </Box>
  );
};

Projects.propTypes = {};

export default Projects;
