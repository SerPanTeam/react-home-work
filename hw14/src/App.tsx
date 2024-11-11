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
