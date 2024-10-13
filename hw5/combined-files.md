# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── apple.svg
│   │   └── spotify.png
│   ├── App.module.css
│   ├── App.tsx
│   ├── Logos.module.css
│   ├── Logos.tsx
│   ├── main.tsx
│   ├── svg.d.ts
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── file-tree.txt
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

## src\App.module.css

```css
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.container {
  background-color: #0c0417;
  width: 100%;
  min-height: 100vh;
  color: #1ed760;
  font-family: Rubik;
}

.header {
  display: flex;
  justify-content: flex-start;
  padding: 55px 35px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 10px;
}

p {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.buttons {
  display: flex;
  flex-direction: row;
  border-radius: 65px;
  border: 3px solid #1ed760;
  padding: 35px 35px 15px 35px;
  margin-top: 10px;
}

```

## src\App.tsx

```typescript
import styles from "./App.module.css";
import imgSpotify from "./assets/spotify.png";

import AppleLogo from "./Logos";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={imgSpotify} alt="" />
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <h1>LIFE IS WASTED ON THE LIVING</h1>
          <p>Sign in</p>
          <p>with</p>
          <div className={styles.buttons}>
            <AppleLogo
              logoName="apple"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
            <AppleLogo
              logoName="google"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
            <AppleLogo
              logoName="x"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

```

## src\Logos.module.css

```css
/* src/App.module.css */

/* Контейнер для всех иконок */
.appleLogoContainer {
  display: inline-block;
  transition: transform 0.3s ease, fill 0.3s ease; /* Плавное перемещение и изменение цвета */
  cursor: pointer; /* Указатель мыши при наведении */
}

.appleLogoContainer:hover {
  transform: translateY(-10px); /* Сдвиг иконки вверх на 10px при наведении */
}

/* Дополнительный стиль для цвета при наведении */
.appleLogoContainer svg path {
  transition: fill 0.3s ease; /* Плавное изменение цвета заливки */
}

.appleLogoContainer:hover svg path {
  fill: #1181f1;
}

```

## src\Logos.tsx

```typescript
import React from "react";
import styles from "./Logos.module.css";


const logos = {
  apple:
    "M30 0C13.4315 0 0 13.4315 0 30V68C0 84.5685 13.4315 98 30 98H67C83.5685 98 97 84.5685 97 68V30C97 13.4315 83.5685 0 67 0H30ZM65.8072 51.351C65.8072 46.7235 68.3373 42.5588 72.4337 40.1294C69.6627 36.3118 65.0843 34.1137 60.2651 34.2294C57.6117 34.2294 55.2011 35.1231 53.1741 35.8746C51.7035 36.4198 50.4348 36.8902 49.4217 36.8902C48.3083 36.8902 47.0316 36.3973 45.6018 35.8454C43.7825 35.1431 41.7154 34.3451 39.4217 34.3451C31.7108 34.3451 24 40.4765 24 51.9294C24.1205 58.9863 26.4096 65.6961 30.3855 71.4804C33.3976 75.6451 36.0482 79 39.9036 79C41.7361 79 43.0786 78.4512 44.4875 77.8753C46.0429 77.2394 47.6791 76.5706 50.1446 76.5706C52.6521 76.5706 54.1811 77.197 55.648 77.7979C57.0004 78.3519 58.3 78.8843 60.2651 78.8843C64.3615 78.8843 67.1325 75.1824 69.7831 71.5961C71.5904 69.051 73.0361 66.2745 74 63.2667C69.0602 61.3 65.8072 56.5569 65.8072 51.351ZM61.3494 21.1569C61.2289 24.1647 60.1446 27.0569 58.0964 29.3706C56.0482 31.8 53.0361 33.4196 49.7831 33.651C49.6627 33.651 49.512 33.6221 49.3614 33.5931C49.2108 33.5642 49.0602 33.5353 48.9398 33.5353C48.8193 33.1882 48.8193 32.8412 48.8193 32.4941C48.9398 29.4863 50.1446 26.7098 52.1928 24.5118C54.4819 21.9667 57.7349 20.3471 61.2289 20C61.3494 20.3471 61.3494 20.8098 61.3494 21.1569Z",
  google:
    "M0 30C0 13.4315 13.4315 0 30 0H67C83.5685 0 97 13.4315 97 30V68C97 84.5685 83.5685 98 67 98H30C13.4315 98 0 84.5685 0 68V30ZM83.0398 49.5465C83.0398 47.0126 82.8124 44.5762 82.3901 42.2372H48.7347V56.0599H67.9664C67.138 60.5267 64.6203 64.3114 60.8357 66.8453L60.8357 66.8452C57.6358 68.9893 53.5426 70.2562 48.7347 70.2562C39.4275 70.2562 31.5497 63.9702 28.7396 55.5239H28.7395C28.0248 53.3798 27.6187 51.0896 27.6187 48.7344C27.6187 46.3792 28.0248 44.0889 28.7395 41.9449V41.9447L28.7396 41.9449C31.5497 33.4985 39.4275 27.2125 48.7347 27.2125C53.9812 27.2125 58.6916 29.0155 62.395 32.5564L72.6443 22.3071C66.4557 16.5409 58.3668 12.9999 48.7347 12.9999C34.7658 12.9999 22.681 21.0077 16.8011 32.6864L16.8009 32.6864C14.2995 37.666 12.9979 43.1618 13.0001 48.7344C13.0001 54.5006 14.3807 59.9583 16.8009 64.7824L16.8011 64.7824C22.681 76.4611 34.7658 84.4688 48.7347 84.4688C58.383 84.4688 66.472 81.269 72.3844 75.8113L72.3845 75.8113C79.1415 69.5903 83.0398 60.4293 83.0398 49.5465Z",
  x: "M30.5398 0C13.9712 0 0.539795 13.4315 0.539795 30V68.1158C0.539795 84.6843 13.9713 98.1158 30.5398 98.1158H76.4603C93.0288 98.1158 106.46 84.6843 106.46 68.1158V30C106.46 13.4315 93.0288 0 76.4602 0H30.5398ZM86.3795 16H75.1127L56.5819 37.3475L40.423 16H17L44.8704 52.4687L18.4825 82.7111H29.7492L50.2073 59.4363L67.9969 82.7111H90.8269L61.7705 44.3151L86.3795 16ZM77.3364 75.8917H71.1101L30.194 22.3746H37.0133L77.3364 75.8917Z",
} as const;

// Определяем тип, который представляет собой ключи объекта 'logos'
type LogoName = keyof typeof logos; // "apple" | "google" | "x"

interface AppleLogoProps extends React.SVGProps<SVGSVGElement> {
  logoName: LogoName;
  fillColor?: string; // Необязательный проп для цвета заливки
  backgroundColor?: string; // Необязательный проп для цвета фона
}

const AppleLogo: React.FC<AppleLogoProps> = ({
  logoName,
  fillColor = "currentColor",
  backgroundColor = "transparent",
  className,
  ...props
}) => (
  <div
    className={styles.appleLogoContainer}
    // style={{ backgroundColor }}
  >
    <svg
      width="60"
      height="60"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d={logos[logoName]}
        fill={fillColor}
      />
    </svg>
  </div>
);

export default AppleLogo;

```

## src\main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src\svg.d.ts

```typescript
declare module "*.svg" {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

```

## src\vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## vite.config.ts

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'named', // Устанавливаем экспорт как именованный
      },
    }),
    react(),
  ],
});

```

# Дополнительные файлы

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HW5</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

