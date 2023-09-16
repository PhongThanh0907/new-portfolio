import { ThemeColor } from "@/types/ThemeColor.type";

export const themes: { [key: string]: ThemeColor } = {
  blue: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary:
      "radial-gradient( circle at 10% 20%, rgb(3, 235, 255) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#00f2fe",
    shadow: "",
  },
  green: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary: "radial-gradient( circle at 10% 20%, rgb(127, 255, 0) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#7FFF00",
    shadow: "",
  },
  pink: {
    backgroundPrimary: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    backgroundSecondary: "radial-gradient( circle at 10% 20%, rgb(254, 83, 187) 0%, rgb(152, 70, 242) 100.2% )",
    primary: "#FE53BB",
    shadow: "",
  },
};
