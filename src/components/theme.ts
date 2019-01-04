import { DefaultTheme } from "styled-components";

export interface StringTMap<T> {
  [key: string]: T;
}

export enum rainbow {
  red = "#D04B36",
  orange = "#E36511",
  yellow = "#FFBA00",
  green = "#00B180",
  blue = "#147AAB",
  indigo = "#675997"
}

export const rainbowColors: StringTMap<string> = {
  red: "#D04B36",
  orange: "#E36511",
  yellow: "#FFBA00",
  green: "#00B180",
  blue: "#147AAB",
  indigo: "#675997"
};

export const theme: DefaultTheme = {
  primary: rainbow.red,
  secondary: "#00A5BD",
  text: "#484848"
};

export function themeGenerator(color: string): DefaultTheme {
  return {
    primary: color,
    secondary: "#00A5BD",
    text: "#484848"
  };
}
