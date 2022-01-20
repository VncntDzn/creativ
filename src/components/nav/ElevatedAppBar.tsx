import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Navbar from "./Navbar";
import { Button, Grid } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: any;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Grid
            container
            alignItems="center"
            sx={{ paddingX: { xs: 1, md: 9, lg: 20 } }}
          >
            <Grid item xs={4} lg={3}>
              <Toolbar>
                <Typography
                  fontFamily="Merriweather, sans-serif"
                  variant="h5"
                  component="div"
                  color="black"
                  fontWeight={600}
                >
                  CreatiV
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item lg={5} xs={8}>
              <Navbar />
            </Grid>
            <Grid
              item
              lg={4}
              container
              justifyContent="flex-end"
              sx={{ display: { xs: "none" } }}
            >
              <Button>Contact Us</Button>
            </Grid>
          </Grid>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
