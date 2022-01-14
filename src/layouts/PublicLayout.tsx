import PropTypes from "prop-types";
import { ChildrenProps } from "../types";
import { Box } from "@mui/material";

const PublicLayout = ({ children }: ChildrenProps) => {
  return <Box>{children}</Box>;
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
