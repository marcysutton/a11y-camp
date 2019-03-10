import { DefaultTheme } from "styled-components";

export interface StringTMap<T> {
  [key: string]: T;
}

interface IColor {
  primary: string;
  secondary: string;
  text?: string;
  background?: string;
}
export enum rainbow {
  red = "#c74531",
  orange = "#E36511",
  yellow = "#FFBA00",
  green = "#017d5b",
  blue = "#147AAB",
  indigo = "#675997"
}

export const theme: DefaultTheme = {
  primary: "#D04B36",
  secondary: "#00A5BD",
  text: "#484848",
  background: "#FAFAFA"
};

export const rainbowColors: StringTMap<string> = {
  red: rainbow.red,
  orange: rainbow.orange,
  yellow: rainbow.yellow,
  green: rainbow.green,
  blue: rainbow.blue,
  indigo: rainbow.indigo
};

export const updatedColors: StringTMap<IColor> = {
  red: {
    primary: rainbow.red,
    secondary: theme.secondary,
    background: "#fff"
  },
  orange: {
    primary: rainbow.orange,
    secondary: "",
    background: "#000",
    text: "#fff"
  },
  yellow: {
    primary: rainbow.yellow,
    secondary: "",
    text: "#ffffff",
    background: "#000000"
  },
  green: {
    primary: rainbow.green,
    secondary: "",
    background: "#fff"
  },
  blue: {
    primary: rainbow.blue,
    secondary: "",
    background: "#fff"
  },
  indigo: {
    primary: rainbow.indigo,
    secondary: "",
    background: "#fff"
  }
};

export function themeGenerator(color: string) {
  return {
    ...updatedColors[color],
    text: updatedColors[color].text,
    background: updatedColors[color].background
  };
}
