# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   └── SwitchLanguage.tsx
│   ├── App.tsx
│   ├── LanguageContext.tsx
│   ├── localization.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# Файлы .ts, .tsx, .css

## src\App.tsx

```typescript
import "@picocss/pico/css/pico.min.css";
import { LanguageProvider } from "./LanguageContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SwitchLanguage from "./components/SwitchLanguage";
function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <SwitchLanguage/>
        <article>
          <Header></Header>
          <Main></Main>
        </article>
        <Footer></Footer>
      </div>
    </LanguageProvider>
  );
}

export default App;

```

## src\components\Footer.tsx

```typescript
import { useLang} from "../localization";
export default function Footer() {
  const { language, t  } = useLang();
  return (
    <footer>
      <p>{t(language, "footer")}</p>
    </footer>
  );
}

```

## src\components\Header.tsx

```typescript
import { useLang } from "../localization";

export default function Header() {
  const { language, t } = useLang();
  return (
    <h1>{t(language, "title")}</h1>
  );
}

```

## src\components\Main.tsx

```typescript
import { useLang } from "../localization";

export default function Main() {
  const { language, t } = useLang();

  return (
    <main>
      <p>{t(language, "description")}</p>
    </main>
  );
}

```

## src\components\SwitchLanguage.tsx

```typescript
import { useLang } from "../localization";
export default function SwitchLanguage() {
    const { language, switchLanguage, t } = useLang();
    return (
        <header style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={switchLanguage}>
                {t(language, "changeLanguage") + ` (${language})`}
            </button>
        </header>
    );
}
```

## src\LanguageContext.tsx

```typescript
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


```

## src\localization.ts

```typescript
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
```

## src\main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src\vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

# Дополнительные файлы

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

