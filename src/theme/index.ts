import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#EF4444",
    },
    secondary: {
      main: "#71717A",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },
});
export default theme;
