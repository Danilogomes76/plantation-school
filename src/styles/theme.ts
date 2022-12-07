import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    df: "#3D602D",
    primary: "#93C0A4",
    secondary: "#8E9B90",
    bc_900: "#B6C4A2",
    bc_800: "#DCE2BD",
    comp: "#D4CDAB",
    background: "linear-gradient(90deg, #93C0A4 19.98%, #D4CDAB 91.03%);",
  },

  fontSize: {
    desktop: {
      title: "bold 96px 'Roboto Condensed',sans-serif;",
      subTitle: "bold 48px 'Roboto Condensed',sans-serif;",
      p: "lighter 24px 'Roboto Condensed',sans-serif;",
      p_largue: "lighter 36px 'Roboto Condensed',sans-serif;",
    },
    mobile: {
      title: "",
      subTitle: "bold 32px 'Roboto Condensed',sans-serif;",
      p: "lighter 20px 'Roboto Condensed',sans-serif;",
    },
  },
};

export { myTheme };
