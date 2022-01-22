import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import socialMedia, { SocMedProps } from "./utils/socialMedia";
import { NextRouter, useRouter } from "next/router";
import links, { LinkProps } from "./utils/links";

const HEADER_FONT_STYLE = {
  xs: 22,
  sm: 35,
  md: 30,
  lg: 32,
  xl: 30,
};
const FONT_MERRIWEATHER = "Merriweather, sans-serif";

const Footer = () => {
  const router: NextRouter = useRouter();
  return (
    <Box
      marginTop={30}
      paddingTop={4}
      sx={{
        height: { xs: "13rem", md: "20vh" },
        backgroundColor: "#ce7831",
        paddingX: { xs: 2, md: 10, lg: 15, xl: 20 },
      }}
    >
      <Grid container>
        <Grid item sm={4} md={4}>
          <Typography
            component="span"
            fontFamily={FONT_MERRIWEATHER}
            fontWeight={600}
            color="white"
            sx={{
              fontSize: HEADER_FONT_STYLE,
              backgroundColor: "#ce7831",
              textAlign: { xs: "center" },
            }}
          >
            CreatiV
          </Typography>
        </Grid>
        <Grid
          item
          sm={4}
          md={4}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          {links.map(({ name, href }: LinkProps) => (
            <Typography
              color="white"
              sx={{
                cursor: "pointer",
              }}
              key={name}
              onClick={() => router.push(href)}
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={4} md={4} container justifyContent="center">
          {socialMedia.map(({ icon, href }: SocMedProps, i) => (
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={() => router.push(href)}
              key={i}
            >
              {icon}
            </IconButton>
          ))}
        </Grid>
      </Grid>
      <Divider>
        <Typography color="white">
          © CreatiV 2022, All Rights Reserved.
        </Typography>
      </Divider>
    </Box>
  );
};

Footer.propTypes = {};

export default Footer;
