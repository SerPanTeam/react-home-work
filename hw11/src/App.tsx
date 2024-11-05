import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="container">
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <h1>
                  <Link to="/">[HomeWork-11]</Link>
                </h1>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "contrast" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "contrast" : "")}
                  to="/posts"
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "contrast" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "contrast" : "")}
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:tagName" element={<Posts />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <small>Copyright © 2024</small>
        </footer>
      </article>
    </div>
  );
}

export default App;
