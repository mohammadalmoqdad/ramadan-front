// here are where all of our colors should be added.
export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  lightWheat: "#FDFDFB",
  warmWheat: "#FBF9F7",
  lightGrey: "#FBF9F7",
  darkGrey: "#A79F97",
  yellow: "#fdd561",
  red: "#FF5367",
  // Example of how the degrees of the colors can be added too:
  //   green:{
  //     0: 'a very light degree of the most light green'
  //   }
};

export const blankUserBackgroundColors = [
  "#503E9D",
  "#FDD561",
  "#FF5367",
  "#FFBAC2",
  "#FB862C",
];

export const fonts = {
  headingEN: "Montserrat",
  mainEN: "Montserrat",
  headingAR: "Noto Kufi Arabic",
  mainAR: "Noto Kufi Arabic",
};

export const spacing = {
  xxs: "0.25rem",
  xs: "0.5rem",
  s: "0.75rem",
  m: "1rem",
  l: "1.25rem",
  xl: "2rem",
  xxl: "3rem",
};

export const zIndices = {
  base: 1,
  hide: -1,
  nav: 999,
  snackbar: 99999,
};

export const flexes = {
  leftToRight: "row",
  rightToLeft: "row-reverse",
};

export const arabicTheme = {
  // these lines can be added to the light and dark theme if we decided to use both
  //   background: {
  //     main: colors.white,
  //     sidebar: colors.warmWheat,
  //   },

  flex: {
    direction: flexes.rightToLeft,
  },
  fonts: {
    fontFamilyBody: fonts.mainAR,
    fontFamilyHeading: fonts.headingAR,
  },
  text: {
    textAlign: "right",
  },
};

export const englishTheme = {
  flex: {
    direction: flexes.leftToRight,
  },
  fonts: {
    fontFamilyBody: fonts.mainEN,
    fontFamilyHeading: fonts.headingEN,
  },
  text: {
    textAlign: "left",
  },
};
