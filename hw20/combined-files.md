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
│   ├── store.tsx
│   ├── userSlice.tsx
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
// import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux"; // Импортируем хук для dispatch и state

interface USER {
  id: number;
  name: string;
  email: string;
}

function App() {
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch(); // Инициализируем dispatch
  const users = useSelector((state) => state.users.users); // Получаем пользователей из state
  console.log(users);

  return (
    <>
      <h1>HW 20</h1>
      <ul>
        {users.map((val: USER) => {
          return (
            <li key={val.id}>
              {val.name} - {val.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

```

## src\index.css

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

```

## src\main.tsx

```typescript
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

```

## src\store.tsx

```typescript
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
```

## src\userSlice.tsx

```typescript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
    { id: 4, name: "David Wilson", email: "david.wilson@example.com" },
    { id: 5, name: "Eve Davis", email: "eve.davis@example.com" },
    { id: 6, name: "Frank Miller", email: "frank.miller@example.com" },
    { id: 7, name: "Grace Lee", email: "grace.lee@example.com" },
    { id: 8, name: "Hannah Taylor", email: "hannah.taylor@example.com" },
    { id: 9, name: "Ian Walker", email: "ian.walker@example.com" },
    { id: 10, name: "Julia Hall", email: "julia.hall@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser(state, action) {
      //state.push(action.payload);
    // },
    // delUser(state, action) {},
    // resetUsers(state, action) {},
  },
});

// export const { addUser} = userSlice.actions;
export default userSlice.reducer;
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
  base: "/react-home-work/hw20/dist/",

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

