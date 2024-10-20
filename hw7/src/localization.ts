import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export type TranslationKeys = 'title' | 'changeLanguage' | 'description' | 'footer';
export type LanguagesKeys = 'en' | 'de';

const localization = {
    de: {
        title: "Hausaufgabe sieben",
        changeLanguage: "Sprache ändern",
        description: "Dies ist ein Beispiel für eine mehrsprachige Anwendung.",
        footer: "© 2024 Ihr Unternehmen. Alle Rechte vorbehalten."
    },
    en: {
        title: "Homework seven",
        changeLanguage: "Change language",
        description: "This is an example of a multilingual application.",
        footer: "© 2024 Your Company. All rights reserved."
    }
};

export function t(lang: LanguagesKeys, part: TranslationKeys): string {
    return localization[lang][part];
}

export function useLang() {

    const context = useContext(LanguageContext);
    if (context)
        return context;
    else
        throw new Error("Error in context!");
}