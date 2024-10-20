import { createContext, ReactNode, useState } from "react";
import { TranslationKeys, LanguagesKeys, t } from './localization';
interface LanguageContextType {
  language: LanguagesKeys;
  switchLanguage: () => void;
  t: (lang: LanguagesKeys, part: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguagesKeys>("en");
  const switchLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "de" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

