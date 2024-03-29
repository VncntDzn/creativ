/**
 * CustomActiveLink - the active link component for navigation.
 * @param children - composition props.
 * @param href - route to navigate.
 */
import { NextRouter, useRouter } from "next/router";
import { Typography } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";

const ActiveLink = ({ children, href = "/" }) => {
  const router: NextRouter = useRouter();
  const CONDITION = router.pathname === href;
  const ACTIVE_STYLE = { color: "black", borderTop: "5px solid #ce7831" };
  const INACTIVE_STYLE = {
    color: "black",
    cursor: "pointer",
  };
  return (
    <Link passHref={true} href={href}>
      <Typography
        fontFamily="Open Sans, sans-serif"
        textAlign="center"
        fontWeight={500}
        fontSize={15}
        p={3}
        px={4}
        sx={[
          CONDITION ? ACTIVE_STYLE : INACTIVE_STYLE,
          {
            "&:hover": {
              background: "rgb(198, 116, 47, 0.7)",
              color: 'white'
            },
          },
        ]}
      >
        {children}
      </Typography>
    </Link>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
export default ActiveLink;
