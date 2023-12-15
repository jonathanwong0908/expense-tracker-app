import tokens from "./tokens";

const light = {
  background: tokens.color["neutral-50"],
  foreground: tokens.color["neutral-900"],
};

type ThemeBase = typeof light;

const dark: ThemeBase = {
  background: tokens.color["neutral-950"],
  foreground: tokens.color["neutral-50"],
};

const allThemes = {
  light,
  dark,
};

type ThemeName = keyof typeof allThemes;

type Themes = {
  [key in ThemeName]: ThemeBase;
};

export const themes: Themes = allThemes;
