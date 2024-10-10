import { useState } from "react";

function getRndNum() {
  return Math.round(Math.random() * 100);
}

function App() {
  const [count, setCount] = useState(0);
  const [firstNum, setfirstNum] = useState(getRndNum());
  const [secondNum, setSecondNum] = useState(getRndNum());
  const [inputState, setInputState] = useState<boolean | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const curAnswer = inputValue; //document.querySelector<HTMLInputElement>("#answer");
    // if (curAnswer)
    if (parseInt(curAnswer) === firstNum + secondNum) {
      setInputState(false);
      setCount((cur) => cur + 1);
      setInputValue("");
      setfirstNum(getRndNum());
      setSecondNum(getRndNum());
      setInputState(undefined);
    } else {
      setInputState(true);
    }
  }

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Math Quiz</h1>
      <article className="container">
        <h2>Ваши очки: {count}</h2>
        <h3>
          {firstNum} + {secondNum} = ?
        </h3>
        <form onSubmit={(e) => checkAnswer(e)}>
          <fieldset role="group">
            <input
              aria-invalid={inputState}
              id="answer"
              name="answer"
              placeholder="Введите ответ"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="submit" value="Проверить" />
          </fieldset>
        </form>
      </article>
    </main>
  );
}

export default App;
