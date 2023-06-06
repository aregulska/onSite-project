import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#649e3c",
      dark: "#0c2304",
      light: "#6fd404",
    },
    secondary: {
      main: "#ff8914",
      light: "#ffd014",
      dark: "#ff4714",
    },
    error: {
      main: "#ef4343",
    },
    warning: {
      main: "#ff8914",
    },
    info: {
      main: "#008de5",
    },
    success: {
      main: "#13a213",
    },
    text: {
      primary: "#333333",
      secondary: "#999999",
      disabled: "#bbbbbb",
    },
    background: {
      default: "#ffffff",
      start: "#add8e6",
    },
  },
});

export const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
