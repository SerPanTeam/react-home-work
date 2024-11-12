# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── Redux
│   │   ├── actions.tsx
│   │   ├── interfaces.ts
│   │   ├── reducer.tsx
│   │   └── store.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── FormUser.tsx
│   ├── index.css
│   ├── ListUser.tsx
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
import { Routes, Route, Link } from "react-router-dom";
import ListUser from "./ListUser";
import FormUser from "./FormUser";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <article className="container">
      <header>
        <nav>
          <ul>
            <li>
              <h1>Users DB system</h1>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/user" element={<FormUser />} />
          <Route path="/user/:id" element={<FormUser />} />
        </Routes>
      </main>
      <footer>© UserDBsystem</footer>
    </article>
  );
}

export default App;

```

## src\FormUser.tsx

```typescript
import { useParams } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
//import { User } from "./Redux/interfaces";
import { connect } from "react-redux";
import { addUser } from "./Redux/actions";

export function FormUser({state, addUser}) {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    const newUser = { ...data };
    console.log(addUser);
    addUser(state, newUser);
    console.log(state);
  };
  //console.log(errors);

  return (
    <>
      <h2>{id ? `Edit user id:${id}` : "New user"}</h2>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: { value: true, message: "Name - required" },
            maxLength: { value: 80, message: "Max Name - 80 chars" },
          })}
        />
        {/* {errors["firstName"] && <mark className="">{errors["firstName"].message}</mark>} */}
        {errors["firstName"] && <mark className="">Error!</mark>}

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        {errors["lastName"] && <mark className="">Error!</mark>}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors["Email"] && <mark className="">Error!</mark>}
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        {errors["mobileNumber"] && <mark className="">Error</mark>}

        <input type="submit" />
      </form>
    </>
  );
}

// Функция для получения данных из состояния
const mapStateToProps = (state) => ({
    state: state,
});

// Функция для отправки действия
const mapDispatchToProps = {
  addUser,
};

// Подключение компонента к Redux с помощью connect
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);

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

## src\ListUser.tsx

```typescript
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  return (
    <>
      <h2>List user</h2>
      <button onClick={() => navigate("/user")}>Create new user</button>
      <article style={{ display: "flex", justifyContent: "space-between" }}>
        <p>User name 1111111111</p>
        <div role="group1">
          <button className="secondary">Edit</button>
          <button className="contrast">Delete</button>
        </div>
      </article>

      <article style={{ display: "flex", justifyContent: "space-between" }}>
        <p>User name 1111111111</p>
        <div role="group1">
          <button className="secondary">Edit</button>
          <button className="contrast">Delete</button>
        </div>
      </article>
    </>
  );
}

```

## src\main.tsx

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./Redux/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);

```

## src\Redux\actions.tsx

```typescript
import { User } from "./interfaces";

export const ADD_USER = "ADD_USER";
export const MOD_USER = "MOD_USER";
export const DEL_USER = "DEL_USER";

export const addUser = (user: User) => ({ type: ADD_USER, payload: user });
export const modUser = (user: User) => ({ type: MOD_USER, payload: user });
export const delUser = (user: User) => ({ type: DEL_USER, payload: user });

```

## src\Redux\interfaces.ts

```typescript
export interface Action {
  type: string;
  payload: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

```

## src\Redux\reducer.tsx

```typescript
import { ADD_USER } from "./actions";
import {Action} from "./interfaces";

const initState = {
  users: [],
};

export function userReducer(state = initState, action: Action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}

```

## src\Redux\store.tsx

```typescript
import { createStore } from "redux";
import { userReducer } from "./reducer";

export const store = createStore(userReducer);


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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HW 14</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

