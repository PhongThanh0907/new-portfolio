import { ThemeColor } from "@/types/ThemeColor.type";

export const themes: { [key: string]: ThemeColor } = {
  blue: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary:
      "radial-gradient( circle at 10% 20%, rgb(3, 235, 255) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#00f2fe",
    shadow: "",
    bgCircle: "changeColor-circle-blue",
    bgGradient: "blue-gradient",
    textLight: "text-light-blue",
    bgDark: "#440BD4",
  },
  green: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary:
      "radial-gradient( circle at 10% 20%, rgb(127, 255, 0) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#7FFF00",
    shadow: "",
    bgCircle: "changeColor-circle-green",
    bgGradient: "green-gradient",
    textLight: "text-light-green",
    bgDark: "#428006",
  },
  pink: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary:
      "radial-gradient( circle at 10% 20%, rgb(254, 83, 187) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#FE53BB",
    shadow: "",
    bgCircle: "changeColor-circle-pink",
    bgGradient: "pink-gradient",
    textLight: "text-light-pink",
    bgDark: "#a40265",
  },
};
