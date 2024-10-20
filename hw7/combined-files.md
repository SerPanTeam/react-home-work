# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── copmonents
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Main.tsx
│   ├── App.tsx
│   ├── LanguageContext.tsx
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
import Header from "./copmonents/Header";
import Main from "./copmonents/Main";
import Footer from "./copmonents/Footer";
function App() {
  return (
    <LanguageProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </LanguageProvider>
  );
}

export default App;

```

## src\copmonents\Footer.tsx

```typescript
export default function Footer() {
    return (
      <footer>
        <p>Lorem ipsum dolor sit amet.</p>
      </footer>
    );
  }
  
```

## src\copmonents\Header.tsx

```typescript
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Header() {
  const {language, switchLanguage } = useContext(LanguageContext);
  return (
    <header>
      <h1>Title</h1>
      <button>Change language({language})</button>
    </header>
  );
}

```

## src\copmonents\Main.tsx

```typescript
export default function Main() {
    return (
      <main>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, animi!</p>
      </main>
    );
  }
  
```

## src\LanguageContext.tsx

```typescript
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
    setLanguage((prevLang: string) => (prevLang === "en" ? "de" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

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

