//import { useContext } from "react";
import { useLang } from "../LanguageContext";

export default function Header() {
  const context = useLang(); //useContext(LanguageContext);

  if (!context) {
    throw new Error("Header должен использоваться внутри LanguageProvider");
  }
  const { language, switchLanguage } = context;
  return (
    <>
      <button onClick={switchLanguage}>
        {language == "de" ? "Sprache ändern" : "Change language"}({language})
      </button>
      <header>
        <h1>{language == "de" ? "Hausaufgabe sieben" : "Homework seven"}</h1>
      </header>
    </>
  );
}
