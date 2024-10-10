import { useState } from "react";
//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      
      style={{
        width: "100%",
        //maxWidth: "700px",
        //
        padding: "20px",
      }}
    >
      <article className="container">
        <h2>Ваши очки: 0</h2>
        <h3>1 + 1 = ?</h3>
        <fieldset role="group">
          <input name="antwort" placeholder="Введите ответ" />
          <input type="submit" value="Проверить" />
        </fieldset>
      </article>
    </main>
  );
}

export default App;
