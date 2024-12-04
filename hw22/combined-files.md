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
│   ├── index.css
│   ├── main.tsx
│   ├── quoteSlice.tsx
│   ├── store.tsx
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# Файлы .ts, .tsx, .css

## src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

## src\App.tsx

```typescript
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchRandomQuote } from "./quoteSlice"; // Асинхронное действие
import { useAppDispatch } from "./store"; // Кастомный хук для типизированного dispatch
import { useEffect } from "react";

function App() {
  const quote = useSelector((state: RootState) => state.quote);
  const dispatch = useAppDispatch(); // Используем типизированный dispatch

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl">Random Quote Generator</h1>
          {quote.status === "loading" && <p>Loading...</p>}
          {quote.status === "failed" && (
            <p className="text-red-500">Error: {quote.error}</p>
          )}{" "}
          {quote.status === "succeeded" && (
            <div>
              <p className="italic mt-10">{quote.quoteText}</p>
              <p className="text-xl font-bold mt-10 text-right">
                {quote.quoteAutor}
              </p>
              <button
                onClick={() => {
                  dispatch(fetchRandomQuote());
                }}
                className="bg-blue-200 w-full p-5 mt-5 rounded-lg shadow-lg"
              >
                Get new Quote!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

```

## src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## src\main.tsx

```typescript
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './store.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

```

## src\quoteSlice.tsx

```typescript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Quote {
  quoteText: string;
  quoteAutor: string;
  status: string | null | undefined;
  error: null | string | undefined;
}

const initialState: Quote = {
  quoteText: "",
  quoteAutor: "",
  status: "idle",
  error: null,
};

export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await axios.get("https://api.quotable.io/random");
    return response.data;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    newQuote(state) {
      console.log(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action);
        state.status = "succeeded"; // Загрузка завершена успешно
        state.quoteText = action.payload.content; // Обновлен текст цитаты
        state.quoteAutor = action.payload.author; // Обновлен автор цитаты
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
export const { newQuote} = quoteSlice.actions;

```

## src\store.tsx

```typescript
import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quoteSlice";
import { useDispatch } from "react-redux";


export const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Типизация dispatch
export type AppDispatch = typeof store.dispatch;

// Кастомный хук для типизированного dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
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
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

