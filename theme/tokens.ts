import { createTokens } from "tamagui";
import { color, radius, size, space, themes, zIndex } from "@tamagui/themes";

const tokens = createTokens({
  color: {
    ...color,
    "neutral-50": "#fafafa",
    "neutral-100": "#f5f5f4",
    "neutral-200": "#e5e5e5",
    "neutral-300": "#d4d4d4",
    "neutral-400": "#a3a3a3",
    "neutral-500": "#737373",
    "neutral-600": "#525252",
    "neutral-700": "#404040",
    "neutral-800": "#262626",
    "neutral-900": "#171717",
    "neutral-950": "#0a0a0a",
  },
  space,
  size,
  radius,
  zIndex,
});

export default tokens;
