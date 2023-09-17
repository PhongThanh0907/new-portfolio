import React, { createContext, useContext, useState, ReactNode } from "react";

interface Translations {
  [key: string]: Record<string, string>;
}

const LanguageContext = createContext<
  | {
      currentLanguage: string;
      changeLanguage: (newLanguage: string) => void;
      t: (key: string) => string;
    }
  | undefined
>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const translations: Translations = {
    en: require("../translation/en.json"),
    vi: require("../translation/vi.json"),
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (newLanguage: string) => {
    if (translations[newLanguage]) {
      setCurrentLanguage(newLanguage);
    }
  };

  const t = (key: string) => {
    const translation = translations[currentLanguage];
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderWrapper"
    );
  }
  return context;
}