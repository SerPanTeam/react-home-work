# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── actions.ts
│   ├── App.tsx
│   ├── Counter.tsx
│   ├── main.tsx
│   ├── reducer.ts
│   ├── store.ts
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

## src\actions.ts

```typescript
export const INC1 = "INC1";
export const INC10 = "INC10";
export const INC100 = "INC100";

export const inc1Action = () => ({ type: INC1 });
export const inc10Action = () => ({ type: INC10 });
export const inc100Action = () => ({ type: INC100 });

```

## src\App.tsx

```typescript
import Counter from "./Counter";
function App() {

  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App

```

## src\Counter.tsx

```typescript
import { connect } from "react-redux";
import { inc1Action, inc10Action, inc100Action } from "./actions";

const Counter = ({ count, inc1, inc10, inc100 }) => {
  <div>
    <h1>{count}</h1>
    <button onClick={inc1}>+1</button>
    <button onClick={inc10}>+10</button>
    <button onClick={inc100}>+100</button>
  </div>;
};

// Функция для преобразования состояния в пропсы компонента
const mapStateToProps = (state) => ({
  count: state.count,
});

// Функция для преобразования действий в пропсы компонента
const mapDispatchToProps = (dispatch) => ({
  inc1: () => dispatch(inc1Action()),
  inc10: () => dispatch(inc10Action()),
  inc100: () => dispatch(inc100Action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```

## src\main.tsx

```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

## src\reducer.ts

```typescript
import { INC1, INC10, INC100 } from "./actions";

const initState = { count: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INC1:
      return { state: state.count + 1 };
    case INC10:
      return { state: state.count + 10 };
    case INC100:
      return { state: state.count + 100 };
    default:
      return state;
  }
};

export default counterReducer;

```

## src\store.ts

```typescript
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

export default store;
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

