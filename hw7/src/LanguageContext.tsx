import { createContext, ReactNode, useState } from "react";
interface LanguageContextType {
  language: string;
  switchLanguage: () => void;
}
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  const switchLanguage = () => {
    setLanguage((prevLang: string) => (prevLang === "en" ? "ru" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
