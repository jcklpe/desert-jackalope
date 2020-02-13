const colors = {
  primary: {
    default: "#2657eb",
    heavy: "#1f38c5"
  },
  dark: {
    100: "rgba(12, 17, 43, 1)",
    90: "rgba(12, 17, 43, 0.9)",
    80: "rgba(12, 17, 43, 0.8)",
    30: "rgba(12, 17, 43, 0.3)"
  },
  accent: "#7200ff"
};

//- Color vars
const primaryColor = colors.primary.default;
const heavyprimaryColor = colors.primary.heavy;
const accentColor = colors.accent;
const darkColor = colors.dark[100];
const darkColor90 = colors.dark[90];
const darkColor80 = colors.dark[80];
const darkColor30 = colors.dark[30];

//- Exports
export {
  colors,
  primaryColor,
  heavyprimaryColor,
  accentColor,
  darkColor,
  darkColor90,
  darkColor80,
  darkColor30
};
