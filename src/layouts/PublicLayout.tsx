import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box } from "@mui/material";
import { ElevateAppBar, Footer } from "components";

const PublicLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        sx={{ marginX: { xs: 2, md: 10, lg: 15, xl: 20 } }}
      >
        <ElevateAppBar />
        {children}
      </Box>
      <Footer />
    </>
  );
};
/* background: `linear-gradient(90deg, #eee 1%, transparent 1%) 1px 0, #fff`, */
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
