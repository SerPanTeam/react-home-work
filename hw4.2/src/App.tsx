import { useState } from "react";

function getRndNum() {
  return Math.round(Math.random() * 100);
}

function App() {
  const [count, setCount] = useState(0);
  const [firstNum, setfirstNum] = useState(getRndNum());
  const [secondNum, setSecondNum] = useState(getRndNum());
  const [inputState, setInputState] = useState();
  const [inputValue, setInputValue] = useState('');


  function checkAnswer(e: Event) {
    e.preventDefault();
    const curAnswer = document.querySelector("#answer");
    if (curAnswer)
      if (curAnswer.value == (firstNum + secondNum)) {
        setInputState(false);
        setCount((cur) => cur + 1);
        setInputValue("");
        setfirstNum(getRndNum());
        setSecondNum(getRndNum());
        setInputState("");

      }
      else {
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
        <h3>{firstNum} + {secondNum} = ?</h3>
        <form onSubmit={(e) => checkAnswer(e)} >
          <fieldset role="group">
            <input aria-invalid={inputState} id="answer" name="answer" placeholder="Введите ответ" />
            <input type="submit" value="Проверить" />
          </fieldset>
        </form>
      </article>
    </main >
  );
}

export default App;
