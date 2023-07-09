import { createTheme } from "@mui/material";

export const classes = {
  basicInputsClass: {
    backgroundColor: "inputBgColor.main",
    "&:focus-within": {
      backgroundColor: "inputBgColor.focused",
    },
    m: 3,
  },

  inputLabelClass: {
    "&.MuiInputLabel-root": {
      marginTop: "-8px",
    },
    "&.MuiInputLabel-shrink": {
      transform: "translate(0, -16px) scale(0.8)",
    },
  },

  filledInputClass: {
    "& .MuiFilledInput-input": {
      paddingTop: "10px",
    },
  },
};

export const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xl: 1920,
  //     lg: 1280,
  //     md: 960,
  //     sm: 600,
  //     xs: 0,
  //   },
  // },
  palette: {
    primary: {
      main: "#e68920",
    },
    secondary: {
      main: "#1a1919",
    },
    tertiary: { main: "#595653" },
    inputBgColor: {
      main: "#e0e0e0",
      focused: "#fff",
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "40px",
          },
        },
      },
    },
  },
});
