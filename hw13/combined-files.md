# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Filter.jsx
│   │   ├── UserItem.jsx
│   │   └── UserList.tsx
│   ├── redux
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   └── store.ts
│   ├── styles
│   │   ├── App.module.css
│   │   ├── Filter.module.css
│   │   ├── UserItem.module.css
│   │   └── UserList.module.css
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

## src\App.tsx

```typescript
import style from "./styles/App.module.css"
import UserList from "./components/UserList";

function App() {

  return (
    <div className={style.container}>
      <UserList></UserList>
    </div >
  )
}

export default App

```

## src\components\UserList.tsx

```typescript
import style from "../styles/UserList.module.css";

import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { useState, useRef } from "react";

interface AppState {
  filter: string;
  list: User[];
}

interface User {
  id: number;
  name: string;
}

interface ListProps {
  options: User[];
  filter: string;
  setFilter: (filter: string) => void;
}

export function UserList({ options, filter, setFilter }: ListProps) {
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  function onSelectOption(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.currentTarget.innerText);
    setinputValue(e.currentTarget.innerText);
    setHasFocus(false);
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setinputValue(e.currentTarget.value);
    setFilter(e.currentTarget.value);
    setHasFocus(true);
  }

  function onFocusInput(e: React.FocusEvent<HTMLInputElement>) {
    setFilter(e.currentTarget.value);
    setHasFocus(true);
  }

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement>) {
    const relatedTarget = e.relatedTarget as Node | null;
    if (optionsRef.current && optionsRef.current.contains(relatedTarget)) {
      return;
    }
    setHasFocus(false);
  }

  return (
    <div>
      <input
        onChange={onChangeInput}
        type="text"
        onFocus={onFocusInput}
        value={inputValue}
        onBlur={handleInputBlur}
        ref={inputRef}
      />
      {hasFocus && (
        <div className={style.options} tabIndex={-1} ref={optionsRef}>
          {options
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((val) => {
              if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                const startPos = val.name
                  .toLocaleLowerCase()
                  .indexOf(filter.toLocaleLowerCase());
                const newName =
                  val.name.slice(0, startPos) +
                  "<b>" +
                  val.name.slice(startPos, startPos + filter.length) +
                  "</b>" +
                  val.name.slice(startPos + filter.length, val.name.length);
                return (
                  <div
                    onClick={onSelectOption}
                    key={val.id}
                    className={style.option}
                    dangerouslySetInnerHTML={{ __html: newName }}
                  ></div>
                );
              }
            })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  options: state.list,
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

```

## src\main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import {store} from './redux/store.ts';



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)

```

## src\redux\actions.ts

```typescript

export const setFilter = (filter:string) => ({
    type: "SET_FILTER",
    payload: filter,
})
```

## src\redux\reducer.ts

```typescript
interface Action {
  type: string;
  payload: string;
}

export const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const initState = {
  filter: "",
  //list: [{ id: 1, name: "Алексей" }, { id: 2, name: "Мария" }, { id: 3, name: "Иван" }, { id: 4, name: "Елена" }, { id: 5, name: "Дмитрий" }, { id: 6, name: "София" }, { id: 7, name: "Максим" }, { id: 8, name: "Анастасия" }, { id: 9, name: "Николай" }, { id: 10, name: "Виктория" }, { id: 11, name: "Кирилл" }, { id: 12, name: "Ольга" }, { id: 13, name: "Андрей" }, { id: 14, name: "Наталья" }, { id: 15, name: "Григорий" }, { id: 16, name: "Татьяна" }, { id: 17, name: "Сергей" }, { id: 18, name: "Юлия" }, { id: 19, name: "Павел" }, { id: 20, name: "Екатерина" }],
  list: [
    { id: 1, name: "Алексей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Иван" },
    { id: 4, name: "Елена" },
    { id: 5, name: "Дмитрий" },
    { id: 6, name: "София" },
    { id: 7, name: "Максим" },
    { id: 8, name: "Анастасия" },
    { id: 9, name: "Николай" },
    { id: 10, name: "Виктория" },
    { id: 11, name: "Кирилл" },
    { id: 12, name: "Ольга" },
    { id: 13, name: "Андрей" },
    { id: 14, name: "Наталья" },
    { id: 15, name: "Григорий" },
    { id: 16, name: "Татьяна" },
    { id: 17, name: "Сергей" },
    { id: 18, name: "Юлия" },
    { id: 19, name: "Павел" },
    { id: 20, name: "Екатерина" },
    { id: 21, name: "Антон" },
    { id: 22, name: "Маргарита" },
    { id: 23, name: "Роман" },
    { id: 24, name: "Ксения" },
    { id: 25, name: "Владимир" },
    { id: 26, name: "Дарья" },
    { id: 27, name: "Константин" },
    { id: 28, name: "Алина" },
    { id: 29, name: "Михаил" },
    { id: 30, name: "Полина" },
    { id: 31, name: "Артур" },
    { id: 32, name: "Евгения" },
    { id: 33, name: "Юрий" },
    { id: 34, name: "Алёна" },
    { id: 35, name: "Виталий" },
    { id: 36, name: "Вероника" },
    { id: 37, name: "Артем" },
    { id: 38, name: "Зоя" },
    { id: 39, name: "Василий" },
    { id: 40, name: "Светлана" },
    { id: 41, name: "Олег" },
    { id: 42, name: "Кристина" },
    { id: 43, name: "Пётр" },
    { id: 44, name: "Анжела" },
    { id: 45, name: "Борис" },
    { id: 46, name: "Людмила" },
    { id: 47, name: "Егор" },
    { id: 48, name: "Ирина" },
    { id: 49, name: "Фёдор" },
    { id: 50, name: "Лариса" },
    { id: 51, name: "Эдуард" },
    { id: 52, name: "Тамара" },
    { id: 53, name: "Леонид" },
    { id: 54, name: "Валентина" },
    { id: 55, name: "Степан" },
    { id: 56, name: "Галина" },
    { id: 57, name: "Георгий" },
    { id: 58, name: "Нина" },
    { id: 59, name: "Вадим" },
    { id: 60, name: "Елена" },
    { id: 61, name: "Руслан" },
    { id: 62, name: "Эльвира" },
    { id: 63, name: "Альберт" },
    { id: 64, name: "Марина" },
    { id: 65, name: "Захар" },
    { id: 66, name: "Диана" },
    { id: 67, name: "Станислав" },
    { id: 68, name: "Жанна" },
    { id: 69, name: "Ярослав" },
    { id: 70, name: "Лидия" },
    { id: 71, name: "Адам" },
    { id: 72, name: "Вера" },
    { id: 73, name: "Виктор" },
    { id: 74, name: "Эмма" },
    { id: 75, name: "Геннадий" },
    { id: 76, name: "Оксана" },
    { id: 77, name: "Платон" },
    { id: 78, name: "Раиса" },
    { id: 79, name: "Альбина" },
    { id: 80, name: "Тимофей" },
    { id: 81, name: "Виолетта" },
    { id: 82, name: "Никита" },
    { id: 83, name: "Валерия" },
    { id: 84, name: "Лев" },
    { id: 85, name: "Римма" },
    { id: 86, name: "Роберт" },
    { id: 87, name: "Любовь" },
    { id: 88, name: "Вячеслав" },
    { id: 89, name: "Агата" },
    { id: 90, name: "Давид" },
    { id: 91, name: "Мирослава" },
    { id: 92, name: "Семён" },
    { id: 93, name: "Венера" },
    { id: 94, name: "Данил" },
    { id: 95, name: "Гузель" },
    { id: 96, name: "Илья" },
    { id: 97, name: "Рада" },
    { id: 98, name: "Тимур" },
    { id: 99, name: "Амелия" },
    { id: 100, name: "Владислав" },
  ],
};

```

## src\redux\store.ts

```typescript
import { createStore } from 'redux';
import { reducer } from './reducer';

// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(reducer);
```

## src\styles\App.module.css

```css
.container {
    padding: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    /* align-items: center; */
    /* width: 100%; */
    /* height: 90vh; */
}


```

## src\styles\Filter.module.css

```css

```

## src\styles\UserItem.module.css

```css

```

## src\styles\UserList.module.css

```css
input {
    border: 1px solid black;
    padding: 4px;
    border-radius: 4px;
}

.options {
    border: 1px solid black;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    max-height: 200px;
    overflow-y: auto;
}

.option {
    border-bottom: 1px solid black;
}

.option:hover{
    background-color: darkgrey;
    cursor: pointer;
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

