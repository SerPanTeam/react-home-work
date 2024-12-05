# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Profile.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Tasks.jsx
│   ├── redux
│   │   ├── authSlice.js
│   │   └── store.js
│   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

# Файлы .ts, .tsx, .css

## codewr.js

```javascript
'use strict'

// combine-files.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';


// Поскольку мы используем ES модули, нужно определить __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Название выходного файла
const outputFile = path.join(__dirname, 'combined-files.md');

// Массив дополнительных файлов
const additionalFiles = [
  'index.html',
  // Добавьте другие файлы по необходимости
];

// Функция для генерации дерева файлов
const generateFileTree = (dir, prefix = '') => {
  let tree = '';
  const items = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => {
    // Сортируем директории первыми
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const pointer = isLast ? '└── ' : '├── ';
    tree += `${prefix}${pointer}${item.name}\n`;

    if (item.isDirectory() && item.name !== 'node_modules') {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      tree += generateFileTree(path.join(dir, item.name), newPrefix);
    }
  });

  return tree;
};

// Функция для добавления файла в выходной файл с заголовком и кодовым блоком
const addFile = (filePath) => {
  try {
    const relativePath = path.relative(__dirname, filePath);
    const fileName = path.basename(filePath);
    fs.appendFileSync(outputFile, `## ${relativePath}\n\n`);

    // Определяем язык для кодового блока
    const ext = path.extname(fileName).toLowerCase();
    let lang = '';
    if (['.ts', '.tsx'].includes(ext)) lang = 'typescript';
    else if (['.js', '.jsx'].includes(ext)) lang = 'javascript';
    else if (ext === '.css') lang = 'css';
    else if (ext === '.json') lang = 'json';
    else if (ext === '.html') lang = 'html'; // Поддержка .html
    else lang = ''; // Для других типов файлов

    if (lang) {
      fs.appendFileSync(outputFile, `\`\`\`${lang}\n`);
    } else {
      fs.appendFileSync(outputFile, '```\n');
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    fs.appendFileSync(outputFile, `${content}\n\`\`\`\n\n`);
  } catch (error) {
    console.error(`Ошибка при добавлении файла ${filePath}:`, error);
    fs.appendFileSync(outputFile, `⚠️ Произошла ошибка при добавлении файла **${filePath}**.\n\n`);
  }
};

// Функция для рекурсивного сбора всех .ts, .tsx, .css файлов
const collectFiles = (dir, collectedFiles = []) => {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    if (item.name === 'node_modules') return; // Пропускаем node_modules
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      collectFiles(fullPath, collectedFiles);
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.js', '.jsx','.ts', '.tsx', '.css'].includes(ext)) {
        collectedFiles.push(fullPath);
      }
    }
  });
  return collectedFiles;
};

// Очистка или создание выходного файла
try {
  fs.writeFileSync(outputFile, '');
} catch (error) {
  console.error(`Не удалось создать или очистить файл ${outputFile}:`, error);
  process.exit(1);
}

console.log('🔍 Сканирование проекта...');

try {
  // 1. Добавление дерева файлов проекта
  const fileTree = generateFileTree(__dirname);
  fs.appendFileSync(outputFile, `# Структура проекта\n\n\`\`\`plaintext\n${fileTree}\n\`\`\`\n\n`);
} catch (error) {
  console.error('Ошибка при генерации дерева файлов:', error);
  fs.appendFileSync(outputFile, `⚠️ Не удалось сгенерировать структуру проекта.\n\n`);
}

try {
  // 2. Сбор всех .ts, .tsx, .css файлов
  const collectedFiles = collectFiles(__dirname);

  // Добавление содержимого собранных файлов
  fs.appendFileSync(outputFile, `# Файлы .ts, .tsx, .css\n\n`);
  collectedFiles.forEach(file => {
    addFile(file);
  });
} catch (error) {
  console.error('Ошибка при сборе файлов .ts, .tsx, .css:', error);
  fs.appendFileSync(outputFile, `⚠️ Произошла ошибка при сборе файлов .ts, .tsx, .css.\n\n`);
}

try {
  // 3. Добавление содержимого дополнительных файлов
  if (additionalFiles.length > 0) {
    fs.appendFileSync(outputFile, `# Дополнительные файлы\n\n`);
    additionalFiles.forEach((file) => {
      // Проверка, находится ли файл в src/ или в корне
      let fullPath = path.join(__dirname, 'src', file);
      if (!fs.existsSync(fullPath)) {
        fullPath = path.join(__dirname, file);
      }

      if (fs.existsSync(fullPath)) {
        console.log(`📄 Добавление файла: ${fullPath}`);
        addFile(fullPath);
      } else {
        console.warn(`⚠️ Файл **${file}** не найден и пропущен.`);
        fs.appendFileSync(outputFile, `⚠️ Файл **${file}** не найден и пропущен.\n\n`);
      }
    });
  }
} catch (error) {
  console.error('Ошибка при добавлении дополнительных файлов:', error);
  fs.appendFileSync(outputFile, `⚠️ Произошла ошибка при добавлении дополнительных файлов.\n\n`);
}

console.log(`✅ Все файлы были объединены в ${outputFile}.`);

```

## eslint.config.js

```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

## src\api.js

```javascript
export const API_URL = "https://pocketbase-on-fly.fly.dev";

export function createAvatarUrl(userData) {
  return `${API_URL}/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;
}

```

## src\App.jsx

```javascript
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

```

## src\components\Header.jsx

```javascript
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const user = useSelector((state) => state.auth.user);

  function renderLinks() {
    if (user) {
      return (
        <ul>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>ICH Tasks</strong>
          </Link>
        </li>
      </ul>
      {renderLinks()}
    </nav>
  );
}

```

## src\components\LoginForm.jsx

```javascript
import { useState } from "react";
import axios from "axios";
import PocketBase from "pocketbase";
import { API_URL } from "../api";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const pb = new PocketBase(API_URL);

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Обработчик отправки формы для email/пароля
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");

    const authData = {
      identity: email,
      password,
    };
    const authUrl = API_URL + "/api/collections/users/auth-with-password";

    axios
      .post(authUrl, authData)
      .then((response) => {
        dispatch(
          login({
            user: response.data.record,
            token: response.data.token,
          })
        );
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Обработчик входа через Google OAuth
  const handleGoogleLogin = async () => {
    try {
      const authData = await pb.collection("users").authWithOAuth2({ provider: "google" });

      // Сохраняем данные пользователя в Redux
      dispatch(
        login({
          user: authData.record,
          token: authData.token,
        })
      );

      // Редирект на профиль
      navigate("/profile");
    } catch (error) {
      console.error("Ошибка авторизации через Google:", error);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {/* Email/Password форма */}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">Log in</button>
      </form>

      {/* Кнопка для входа через Google */}
      <button onClick={handleGoogleLogin} style={{ marginTop: "20px" }}>
        Login/Register with Google
      </button>
    </div>
  );
}














// import { useState } from "react";
// import axios from "axios";
// import { API_URL } from "../api";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log({ email, password });
//     setEmail("");
//     setPassword("");

//     const authData = {
//       identity: email,
//       password,
//     };
//     const authUrl = API_URL + "/api/collections/users/auth-with-password";

//     axios
//       .post(authUrl, authData)
//       .then((response) => {
//         dispatch(
//           login({
//             user: response.data.record,
//             token: response.data.token,
//           })
//         );
//         navigate("/profile");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login Form</h2>
//       <label>
//         Email:
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </label>
//       <button type="submit">Log in</button>
//     </form>
//   );
// }

```

## src\components\Profile.jsx

```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, createAvatarUrl } from "../api";
import { logout } from "../redux/authSlice";

export default function Profile() {
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!userData) {
    return (
      <div>
        <h1>You're not logged in</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={createAvatarUrl(userData)} alt={userData.name} />

      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

```

## src\components\ProtectedRoute.jsx

```javascript
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

```

## src\components\Tasks.jsx

```javascript
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL, createAvatarUrl } from "../api";

export default function Tasks() {
  const token = useSelector((state) => state.auth.token);
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const url = `${API_URL}/api/collections/tasks/records`;//?expand=user`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">User</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.title}</th>
              <td>{task.status}</td>
              <td>
                {/* <img
                  src={createAvatarUrl(task.expand.user)}
                  alt={task.expand.user.name}
                /> */}
              </td>
              <td>
                <button>Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

```

## src\index.css

```css
body {
  padding: 16px;
}
```

## src\main.jsx

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

```

## src\redux\authSlice.js

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    tokenExpires: localStorage.getItem("tokenExpires"),
  },
  reducers: {
    login: (state, action) => {
      const tokenExpires = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

      state.token = action.payload.token;
      state.user = action.payload.user;
      state.tokenExpires = tokenExpires;

      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("tokenExpires", tokenExpires);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.tokenExpires = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpires");
    },
  },
});

export const { login, logout } = authSlice.actions;

```

## src\redux\store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

```

## vite.config.js

```javascript
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
    <title>Vite + React</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    >
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

