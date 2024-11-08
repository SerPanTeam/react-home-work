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
import style from "../styles/UserList.module.css"

import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { useRef, useState } from "react";

export function UserList({ options, filter, setFilter }) {

    //console.log(options);
    const [hasFocus, setHasFocus] = useState(false);
    //let hasFocus = false;
    //const [inputValue, setinputValue] = useState("");
    const refInput = useRef();

    function onSelectOption(e) {
        console.log(e.target.innerText);
        //setinputValue(e.target.innerText);
        refInput.current.value = e.target.innerText;
        setHasFocus(false);
    }

    function onChangeInput(e) {
        //console.log(e.target.value);
        setFilter(e.target.value);
    }

    return (
        <div>
            <input onChange={(e) => onChangeInput(e)} ref={refInput} type="text" /* onBlur={() => setHasFocus(false)} */ onFocus={() => setHasFocus(true)} />
            {(hasFocus) &&
                <div className={style.options}>

                    {options.map(val => {
                        if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                            const name = val.name.replace(filter, `<b>${filter}</b>`)
                            return <div onClick={(e) => onSelectOption(e)} key={val.id} className={style.option} dangerouslySetInnerHTML={{ __html: name }}></div>
                        }
                    })
                    }

                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
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
    </StrictMode>,
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



export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

const initState =
{
    filter: "",
    list: [{ id: 1, name: "Алексей" }, { id: 2, name: "Мария" }, { id: 3, name: "Иван" }, { id: 4, name: "Елена" }, { id: 5, name: "Дмитрий" }, { id: 6, name: "София" }, { id: 7, name: "Максим" }, { id: 8, name: "Анастасия" }, { id: 9, name: "Николай" }, { id: 10, name: "Виктория" }, { id: 11, name: "Кирилл" }, { id: 12, name: "Ольга" }, { id: 13, name: "Андрей" }, { id: 14, name: "Наталья" }, { id: 15, name: "Григорий" }, { id: 16, name: "Татьяна" }, { id: 17, name: "Сергей" }, { id: 18, name: "Юлия" }, { id: 19, name: "Павел" }, { id: 20, name: "Екатерина" }],
}

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
    justify-content: center;
    /* align-items: center; */
    width: 100%;
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
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
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

