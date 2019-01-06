import { DefaultTheme } from "styled-components";

export interface StringTMap<T> {
  [key: string]: T;
}

interface IColor {
  primary: string;
  secondary: string;
}

export const updatedColors: StringTMap<IColor> = {
  red: { primary: "#D04B36", secondary: "#00A5BD" },
  orange: { primary: "#E36511", secondary: "" },
  yellow: { primary: "#FFBA00", secondary: "" },
  green: { primary: "#00B180", secondary: "" },
  blue: { primary: "#147AAB", secondary: "" },
  indigo: { primary: "#675997", secondary: "" }
};

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
  text: "#484848",
  background: "#FAFAFA"
};

export function themeGenerator(color: string): DefaultTheme {
  console.log(color);
  return {
    ...updatedColors[color],
    text: "#484848",
    background: "#FAFAFA"
  };
}
