import { createSlice } from "@reduxjs/toolkit";

interface Question {
  question: string;
  answer: string[];
  trueAnswer: number;
  curAnswer: number | null;
}

interface QuestionsState {
  questions: Question[];
  result: number | null; 
}

const initialState: QuestionsState = {
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
