import { useState } from 'react';

const translations: Record<string, Record<string, string>> = {
  en: require('../translation/en.json'),
  vi: require('../translation/vi.json'),
};

export const useLocalization = (initialLanguage: string = 'en') => {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

  const changeLanguage = (newLanguage: string) => {
    if (translations[newLanguage]) {
      setCurrentLanguage(newLanguage);
    }
  };

  const t = (key: string) => {
    const translation = translations[currentLanguage];
    return translation[key] || key;
  };

  return { currentLanguage, changeLanguage, t };
};