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
│   ├── Select.tsx
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
 .main {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
 }



 label {
     white-space: nowrap;
 }

 .row {
     display: flex;
     flex-direction: row;
     gap: 10px;
     justify-content: flex-start;
     align-items: center;
 }

 .row input{
    width: 80px;
 }
```

## src\App.tsx

```typescript
import { useForm } from 'react-hook-form';
// import { useState } from 'react'
import Select from "./Select"
import "./App.css";

interface IdataForm {
  type: string,
  vid: string,
  typeDom: string,
  roomMin: number,
  roomMax: number,
}

function App() {
  const { register, handleSubmit, watch } = useForm<IdataForm>();
  const vidValue = watch("vid");


  function onSubmit(data: IdataForm) {
    console.log(data);
  }

  return (
    <main className='container main'>
      <article>
        <h1>Поиск</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select defaultValue="Аренда или продажа" optionsArray={["Аренда", "Продажа"]} register={register("type")} />
          <Select defaultValue="Вид недвижимости" optionsArray={["Квартира", "Дом", "Участок"]} register={register("vid")} />
          {
            vidValue === "Дом" &&
            <Select defaultValue="Тип дома" optionsArray={["Дом", "Часть дома", "Дача"]} register={register("typeDom")} />
          }
          {
            (vidValue === "Дом" || vidValue === "Квартира") &&
            <div className='row'>
              <label htmlFor="">Комнат от: </label>
              <input type="number" {...register("roomMin", { min: { value: 1, message: "Минимум 1 комната" } })} />
              <label htmlFor="">до:</label>
              <input type="number" {...register("roomMax", { min: 0 })} />
            </div>
          }
          {
            (vidValue === "Дом" || vidValue === "Участок") &&
            <div className='row'>
              <label htmlFor="">Участок от(сот.): </label>
              <input type="number" />
              <label htmlFor="">до:</label>
              <input type="number" />
            </div>
          }
          <button type='submit'>Поиск</button>
          <button type='reset'>Очистить</button>
        </form>
      </article>
    </main>
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

## src\Select.tsx

```typescript
import { UseFormRegisterReturn } from "react-hook-form";

export default function Select({ defaultValue, optionsArray, register }: { defaultValue: string, optionsArray: string[], register: UseFormRegisterReturn }) {
    return (
        <select aria-label={defaultValue} {...register}>
            <option value="">
                {defaultValue}
            </option>
            {
                optionsArray.map((val, i) => {
                    return (<option key={i} value={val}>{val}</option>);
                })
            }
        </select>
    );
}
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
  <!-- Pico.css -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.classless.min.css" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

