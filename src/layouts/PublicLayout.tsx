import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box } from "@mui/material";

const PublicLayout = ({ children }: ChildrenProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: `linear-gradient(90deg, #eee 1%, transparent 1%) 1px 0, #fff`, 
      /*   backgroundImage: `radial-gradient(#c3c3c3 1px, transparent 0)`, */
        backgroundSize: `250px 1px`,
        backgroundPosition: `-19px -19px`,
      }}
    >
      {children}
    </Box>
  );
};
/* background: `linear-gradient(90deg, #eee 1%, transparent 1%) 1px 0, #fff`, */
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
