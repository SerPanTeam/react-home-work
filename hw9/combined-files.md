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
 }

 article{
    width: 600px;
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
    width: 120px;
 }


 .row .price{
    width: 180px;
 }


 form button{
    width: 100%;
 }
```

## src\App.tsx

```typescript
import { useForm } from "react-hook-form";
// import { useState } from 'react'
import Select from "./Select";
import "./App.css";

interface IdataForm {
  type: string;
  vid: string;
  typeDom: string;
  roomMin: number;
  roomMax: number;
  sotMin: number;
  sotMax: number;
  priceMin: number;
  priceMax: number;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isSubmitting },
    reset,
  } = useForm<IdataForm>({ mode: "onChange" });
  const vidValue = watch("vid");

  async function onSubmit(data: IdataForm) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  function getAriaInvalid(inputName: keyof typeof dirtyFields) {

    if (errors[inputName]) return { "aria-invalid": true };
    if (dirtyFields[inputName]) return { "aria-invalid": false }
    else return {};
  }

  return (
    <main className="container main">
      <article>
        <h1>Поиск</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            defaultValue="Аренда или продажа"
            optionsArray={["Аренда", "Продажа"]}
            register={register("type")}
          />
          <Select
            defaultValue="Вид недвижимости"
            optionsArray={["Квартира", "Дом", "Участок"]}
            register={register("vid")}
          />
          {vidValue === "Дом" && (
            <Select
              defaultValue="Тип дома"
              optionsArray={["Дом", "Часть дома", "Дача"]}
              register={register("typeDom")}
            />
          )}
          {(vidValue === "Дом" || vidValue === "Квартира") && (
            <div className="row">
              <label htmlFor="">Комнат от: </label>
              <input
                type="number"
                {...register("roomMin", {
                  min: { value: 1, message: "Минимум 1 комната" },
                  max: { value: 1, message: "Максимум 10 комнат" },
                })}
                {...getAriaInvalid("roomMin")}
              />
              <label htmlFor="">до:</label>
              <input
                type="number"
                {...register("roomMax", {
                  min: { value: 1, message: "Минимум 1 комната" },
                  max: { value: 1, message: "Максимум 10 комнат" },
                })}
                {...getAriaInvalid("roomMax")}
              />
            </div>
          )}
          {(vidValue === "Дом" || vidValue === "Участок") && (
            <div className="row">
              <label htmlFor="">Участок от(сот.): </label>
              <input type="number"
                {...register("sotMin", {
                  min: { value: 0, message: "Минимум 0 соток" },
                })}
                {...getAriaInvalid("sotMin")}
              />
              <label htmlFor="">до:</label>
              <input type="number"
                {...register("sotMax", {
                  min: { value: 0, message: "Минимум 0 соток" },
                })}
                {...getAriaInvalid("sotMax")}
              />
            </div>
          )}
          <div className="row">
            <label htmlFor="">Цена от($): </label>
            <input className="price" type="number"
              {...register("priceMin", {
                min: { value: 0, message: "Цена не ниже нуля" },
              })}
              {...getAriaInvalid("priceMin")}
            />
            <label htmlFor="">до:</label>
            <input className="price" type="number"
              {...register("priceMax", {
                min: { value: 0, message: "Цена не ниже нуля" },
              })}
              {...getAriaInvalid("priceMax")}
            />
          </div>
          <button aria-busy={isSubmitting} type="submit" onClick={handleSubmit(onSubmit)}>
            Поиск
          </button>
          <button type="reset" onClick={reset}>
            Очистить
          </button>
          <div className="errors">
            <p style={{ color: "red" }}>
              {(Object.keys(errors) as (keyof IdataForm)[]).map((errorKey, i) => (
                <>
                  {((i > 0) && (errors[errorKey]?.message) ? ", " : "") + errors[errorKey]?.message}
                </>
              ))
              }
            </p>
          </div>
        </form>
      </article>
    </main>
  );
}

export default App;

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

