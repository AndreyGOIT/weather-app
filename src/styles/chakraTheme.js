import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  breakpoints: {
    mob: "320px",
    mobMax: "480px",
    tab: "768px",
    tabMax: "960px",
    desk: "1280px",
  },

  components: {
    // Button: buttonStyle,
    // Progress: progressStyle,
  },

  styles: {
    global: {},
  },

  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
});
