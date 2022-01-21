import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Pagination } from "@mui/material";

const CaseStudies = (props) => {
  return (
    <Box>
     {/*  <Pagination count={2} /> */}
      <Divider sx={{ marginY: 2 }} />
    </Box>
  );
};

CaseStudies.propTypes = {};

export default CaseStudies;
