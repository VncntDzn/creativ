import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box, Grid } from "@mui/material";
import { ElevateAppBar, Footer } from "components";

const PublicLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <ElevateAppBar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ marginX: { xs: 2, md: 10, lg: 15, xl: 20 } }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
