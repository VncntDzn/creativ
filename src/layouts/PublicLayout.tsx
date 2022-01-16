import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box } from "@mui/material";
import { ElevateAppBar } from "components";

const PublicLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <ElevateAppBar />
      <Box display="flex" alignItems="center">
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
