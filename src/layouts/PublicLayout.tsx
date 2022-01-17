import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box } from "@mui/material";
import { ElevateAppBar } from "components";

const PublicLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <ElevateAppBar />
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        sx={{ border: "3px solid", marginX: { xs: 2, lg: 20 } }}
      >
        {children}
      </Box>
    </>
  );
};
/* background: `linear-gradient(90deg, #eee 1%, transparent 1%) 1px 0, #fff`, */
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
