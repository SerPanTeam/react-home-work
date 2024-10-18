import { createContext, useState } from "react";

export const LanguageContext = createContext("en");
export const LanguageProvider = ({ children }) => {
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
