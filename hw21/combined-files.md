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
│   ├── questionsSlice.tsx
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
import { useDispatch, useSelector } from "react-redux"; // Импортируем хук для dispatch и state
import { setAnswer, setResult } from "./questionsSlice"; // Импортируем action
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();

  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  const result = useSelector((state: RootState) => state.questions.result);

  return (
    <div className="container mx-auto border border-grey-500 p-5 m-5 rounded-xl">
      <h1 className="text-3xl font-bold underline">Home work #21</h1>

      <h2 className="text-2xl font-bold mt-5">Вопросы по Реакту:</h2>
      {questions.map((question, questionID) => {
        return (
          <div
            key={"d" + questionID}
            className="m-2 p-2 rounded-xl border border-green-400"
          >
            <label key={"l" + questionID}>
              <p>{question.question}</p>
              {question.answer.map((answer, answerID) => {
                return (
                  <div>
                    <input
                      key={answerID}
                      type="radio"
                      name={"l" + questionID}
                      onChange={() => {
                        dispatch(setAnswer({ questionID, answerID }));
                        //console.log(questionID, answerID);
                      }}
                    />
                    {answer}
                  </div>
                );
              })}
            </label>
          </div>
        );
      })}
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(setResult());
          }}
          className="bg-slate-400 p-5 m-5 rounded-xl"
        >
          Закончить тест!
        </button>
      </div>
      {result && (
        <>
          <h2 className="text-2xl font-bold mt-5">Ваш результат: {result}</h2>
        </>
      )}
    </div>
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
import store from './store.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

```

## src\questionsSlice.tsx

```typescript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      question: "Что такое JSX?",
      answer: [
        "Расширение JavaScript для описания UI",
        "Технология обработки данных",
      ],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Какой хук используется для управления состоянием в React?",
      answer: ["useState", "useEffect"],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Для чего используется компонент StrictMode?",
      answer: [
        "Для обнаружения потенциальных проблем в приложении",
        "Для увеличения производительности",
      ],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Что возвращает метод ReactDOM.createRoot?",
      answer: ["Корневой элемент React", "Функцию рендера"],
      trueAnswer: 1,
      curAnswer: null,
    },
    {
      question:
        "Какой метод используется для преобразования массива в JSX-элементы?",
      answer: ["map()", "filter()"],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Что такое пропсы в React?",
      answer: [
        "Аргументы, передаваемые в компонент",
        "Локальное состояние компонента",
      ],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Что делает хук useEffect?",
      answer: [
        "Выполняет побочные эффекты в компоненте",
        "Обновляет состояние компонента",
      ],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question:
        "Какой атрибут используется для присвоения CSS-классов элементам?",
      answer: ["className", "class"],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Что такое портал в React?",
      answer: [
        "Способ рендеринга элемента вне родительского DOM-узла",
        "Модуль для обработки состояния",
      ],
      trueAnswer: 0,
      curAnswer: null,
    },
    {
      question: "Какой метод используется для создания контекста в React?",
      answer: ["React.createContext", "React.useContext"],
      trueAnswer: 0,
      curAnswer: null,
    },
  ],
  result: null,
};

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    setAnswer(state, action) {
      //console.log(state, action);
      state.questions[action.payload.questionID].curAnswer =
        action.payload.answerID;
    },
    setResult(state) {
      state.result = state.questions.filter(
        (val) => val.trueAnswer == val.curAnswer
      ).length;
      console.log(state.result);
    },
  },
});

export default questionsSlice.reducer;
export const { setAnswer, setResult } = questionsSlice.actions;

```

## src\store.tsx

```typescript
import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
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
  base: "/react-home-work/hw21/dist/",

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

