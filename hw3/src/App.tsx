import "./App.css";
import ReactLogo from "./assets/react.svg";
import Rating from "./Rating";
import List from "./List";


function App() {

  return (
    <div>
      <h1>Лого дня</h1>
      <img width="300px" src={ReactLogo} alt="React Logo" />
      <Rating></Rating>
      <List></List>
    </div>
  );
}

export default App;