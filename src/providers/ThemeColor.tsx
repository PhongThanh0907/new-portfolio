import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { ThemeColor } from "@/types/ThemeColor.type";
import { themes } from "@/themes/theme";

const ThemeContext = createContext<
  | {
      currentTheme: ThemeColor;
      changeTheme: (themeColor: string) => void;
    }
  | undefined
>(undefined);

const defaultThemeOptions: ThemeColor = {
  backgroundPrimary: themes.blue.backgroundPrimary,
  backgroundSecondary: themes.blue.backgroundSecondary,
  shadow: themes.blue.shadow,
  primary: themes.blue.primary,
  bgCircle: themes.blue.bgCircle,
  bgGradient: themes.blue.bgGradient,
};

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] =
    useState<ThemeColor>(defaultThemeOptions);

  const changeTheme = useCallback((themeColor: string) => {
    setCurrentTheme(themes[themeColor]);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderWrapper"
    );
  }
  return context;
}
