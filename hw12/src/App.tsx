import { useEffect, useRef, useState } from "react";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [value, setValue] = useState("");
  const valueOld = useRef("");
  useEffect(() => {
    valueOld.current = value;
  }, [value]);

  //const [valueOld, setValueOld] = useState("");

  return (
    <div className="container">
      <article>
        <header>
          <h1>Current and Previous value</h1>
          <input
            value={value}
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <ValueDisplay value={value} oldValue={valueOld.current} />
        </header>
        <main></main>
        <footer>
          <small>Copyright © 2024</small>
        </footer>
      </article>
    </div>
  );
}

export default App;
