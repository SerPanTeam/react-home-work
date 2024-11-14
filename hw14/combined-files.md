# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── redux
│   │   ├── actions.tsx
│   │   ├── interfaces.ts
│   │   ├── reducer.tsx
│   │   └── store.tsx
│   ├── App.tsx
│   ├── FormUser.tsx
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
              <Link to={"/user"}>Create new User</Link>
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
import { useForm } from "react-hook-form";
import { User, AppState } from "./redux/interfaces";
import { connect } from "react-redux";
import { addUser, modUser } from "./redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function FormUser({
  users,
  addUser,
  modUser,
}: {
  users: User[];
  modUser: (user: User) => void;
  addUser: (user: User) => void;
}) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    if (id) {
      const newUser = { ...data, id: Number(id) };
      modUser(newUser);
    } else {
      const newUser = { ...data, id: Date.now() };
      addUser(newUser);
    }
    navigate("/");
  };
  //console.log(errors);

  useEffect(() => {
    // console.log(object);
    if (id) {
      reset(users.find((val: User) => val.id == Number(id)));
    }
  }, [id, users, reset]);

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
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors["email"] && <mark className="">Error!</mark>}
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

        <input type="submit" value={id ? `Save user` : "Create user"} />
      </form>
    </>
  );
}

// Функция для получения данных из состояния
const mapStateToProps = (state: AppState) => ({
  users: state.users,
});

// Функция для отправки действия
const mapDispatchToProps = {
  addUser,
  modUser,
};

// Подключение компонента к Redux с помощью connect
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);

```

## src\ListUser.tsx

```typescript
import { useNavigate } from "react-router-dom";
import { User, AppState } from "./redux/interfaces";
import { delUser } from "./redux/actions";
import { connect } from "react-redux";

export function ListUser({
  users,
  delUser,
}: {
  users: User[];
  delUser: (id: number) => void;
}) {
  const navigate = useNavigate();
  return (
    <>
      <h2>List user</h2>
      {/* <button onClick={() => navigate("/user")}>Create new user</button> */}
      {users.sort().map((val: User) => {
        return (
          <article
            key={val.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>
              {val.firstName} {val.lastName} tel:{val.mobileNumber} email:
              {val.email}
            </p>
            <div role="group1" style={{ display: "flex", gap: "10px" }}>
              <button className="" onClick={() => navigate("/user/" + val.id)}>
                Edit
              </button>
              <button className="secondary" onClick={() => delUser(val.id)}>
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}

// Функция для получения данных из состояния
const mapStateToProps = (state: AppState) => ({
  users: state.users,
});

// Функция для отправки действия
const mapDispatchToProps = {
  delUser,
};

// Подключение компонента к Redux с помощью connect
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);

```

## src\main.tsx

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store.tsx";

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

## src\redux\actions.tsx

```typescript
import { User } from "./interfaces";

export const ADD_USER = "ADD_USER";
export const MOD_USER = "MOD_USER";
export const DEL_USER = "DEL_USER";

export const addUser = (user: User) => ({ type: ADD_USER, payload: user });
export const modUser = (user: User) => ({ type: MOD_USER, payload: user });
export const delUser = (userID: number) => ({ type: DEL_USER, payload: userID });

```

## src\redux\interfaces.ts

```typescript
export interface Action {
  type: string;
  payload: User | number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

export interface AppState {
  users: User[];
}
```

## src\redux\reducer.tsx

```typescript
import { ADD_USER, DEL_USER, MOD_USER } from "./actions";
import { User } from "./interfaces";
import { Action } from "./interfaces";

const initState = {
  users: [],
};

export function userReducer(state = initState, action: Action) {
  // console.log(action);

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case MOD_USER:
      return {
        ...state,
        users: [
          ...state.users.filter((val: User) => val.id != action.payload.id),
          action.payload,
        ],
      };
    case DEL_USER:
      return {
        ...state,
        users: [
          ...state.users.filter((val: User) => val.id != action.payload),
        ],
      };
    default:
      return state;
  }
}

```

## src\redux\store.tsx

```typescript
import { createStore } from "redux";
import { userReducer } from "./reducer";

export const store = createStore(userReducer as any);

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
  base: "/react-home-work/hw13/dist/",
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.pumpkin.min.css">
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

