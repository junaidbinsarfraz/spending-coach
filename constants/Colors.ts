const primaryLight = 'rgba(10, 126, 164, 1)'; // #0a7ea4
const primaryDark = 'rgba(255, 255, 255, 1)'; // #fff

export const Colors = {
  light: {
    text: 'rgba(0, 0, 0, 1)', // #11181C
    background: 'rgba(255, 255, 255, 1)', // #fff
    primary: primaryLight,
    muted: 'rgba(236, 236, 236, 1)', // #ECECEC
    secondary: 'rgba(0, 0, 0, 1)',
    mutedText: 'rgba(0, 0, 0, 0.6)',
  },
};

export const shadow = {
  light: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  medium: {
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 7,
  },
  heavy: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 9,
  },
  extraHeavy: {
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 10,
  }
};

export default Colors;
export type ThemeType = typeof Colors;