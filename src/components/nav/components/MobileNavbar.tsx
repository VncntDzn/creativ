import links from "../utils/links";
import ActiveLink from "components/common/ActiveLink";
import { Box } from "@mui/system";
import { Divide as Hamburger } from "hamburger-react";
import { useToggle } from "hooks";

const MobileNavbar = () => {
  const [toggle, handleToggle] = useToggle();
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      zIndex={1}
    >
      <Hamburger
        hideOutline
        direction="right"
        size={23}
        color="#ce7831"
        toggled={toggle}
        toggle={() => handleToggle(!toggle)}
      />

      {toggle && (
        <Box
          top={0}
          right={0}
          position="absolute"
          zIndex={-1}
          height="100vh"
          sx={{
            background: "white",
           }}
        >
          {links.map(({ name, href }) => (
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                width: { xs: "50vw", sm: "30vw" },
              }}
              key={name}
            >
              <ActiveLink href={href}>{name}</ActiveLink>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

MobileNavbar.propTypes = {};

export default MobileNavbar;
