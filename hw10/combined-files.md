# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
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

## src\App.css

```css
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 10px;
}

img {
    height: 400px;
}
```

## src\App.tsx

```typescript
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
function App() {

  const [curImg, setCurImg] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);



  useEffect(() => {
    getImage();
  }, []);

  async function getImage() {
    try {
      setIsSubmitting(true);
      const imgUrl = (await axios.get("https://api.thecatapi.com/v1/images/search")).data[0].url;
      setCurImg(imgUrl);
      console.log(imgUrl);
      setIsSubmitting(false);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container'>
      <article>
        <h1>Random Cat Image</h1>
        <img src={curImg} alt="" />
        <button className="contrast" aria-busy={isSubmitting} onClick={getImage}>Load New Image</button>
        <button className="secondary">Add to Favorites</button>
      </article>
    </div>
  )
}

export default App

```

## src\main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

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

// https://vite.dev/config/
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
  <title>HW 10</title>
  <!-- Pico.css -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.classless.min.css" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

