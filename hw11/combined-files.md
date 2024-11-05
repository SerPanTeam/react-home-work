# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── PostsList.tsx
│   │   └── TagList.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Contacts.tsx
│   │   ├── Home.tsx
│   │   ├── Post.tsx
│   │   └── Posts.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# Файлы .ts, .tsx, .css

## src\App.tsx

```typescript
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

```

## src\components\PostsList.tsx

```typescript
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  views: number;
  tags: string[];
  reactions: { likes: number; dislikes: number };
}

export default function PostsList({ tagName }: { tagName: string|undefined }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function getPosts() {
      const url =
        "https://dummyjson.com/posts/" +
        (tagName ? `tag/${tagName}` : "?limit=0");
      axios
        .get(url)
        .then((response) => {
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    getPosts();
  }, [tagName]);

  return (
    <>
      {posts.map((val: Post) => {
        return (
          <article key={val.id}>
            <Link to={`/post/${val.id}`}>
              <h4>{val.title}</h4>
            </Link>
            <hgroup>
              <p>
                id:{val.id}/likes: {val.reactions.likes}/dislikes:{" "}
                {val.reactions.dislikes}/views: {val.views}/tags:{" "}
                {val.tags.join(", ")}
              </p>
            </hgroup>
          </article>
        );
      })}
    </>
  );
}

```

## src\components\TagList.tsx

```typescript
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function TagList() {
  const [tags, setTags] = useState([]);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts/tag-list")
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h3 tabIndex={-1} ref={headerRef}>
        Categoty:
      </h3>
      <ul>
        {tags.map((val) => {
          return (
            <li key={val}>
              <Link
                to={"/posts/" + val}
                onClick={() => headerRef.current?.focus()}
              >
                {val}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

```

## src\main.tsx

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

```

## src\pages\About.tsx

```typescript
import { useLocation } from "react-router-dom";
export default function About() {
  const loc = useLocation();

  return (
    <article>
      <hgroup>
        <h2>About</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <p>
        Esse non fugit sunt numquam. Totam eos iure culpa accusantium quidem
        ipsa quia dicta eum, repellat repudiandae laborum dolorem obcaecati
        corporis quam voluptates eaque natus adipisci molestiae, consectetur
        quasi sit iste, iusto amet! Vel nobis distinctio repellendus, magnam
        vero quasi? Possimus illo saepe cum quo? Corrupti non repellendus quis
        ratione iure recusandae vero laudantium rerum similique consequatur modi
        harum, consequuntur et? Placeat quaerat id dicta debitis excepturi quasi
        vero totam architecto ipsa?
      </p>
    </article>
  );
}

```

## src\pages\Contacts.tsx

```typescript
import { useLocation } from "react-router-dom";

export default function Contacts() {
  const loc = useLocation();
  return (
    <article>
      <hgroup>
        <h2>Contacts</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        dolores quam provident natus possimus veritatis excepturi ipsam sed
        magni eum quae quis quisquam magnam nihil perspiciatis eos odit, esse
        non fugit sunt numquam. Totam eos iure culpa accusantium quidem ipsa
        quia dicta eum, repellat repudiandae laborum dolorem obcaecati corporis
        quam voluptates eaque natus adipisci molestiae, consectetur quasi sit
        iste, iusto amet! Vel nobis distinctio repellendus, magnam vero quasi?
        Possimus illo saepe cum quo? Corrupti non repellendus quis ratione iure
        recusandae vero laudantium rerum similique consequatur modi harum,
        consequuntur et? Placeat quaerat id dicta debitis excepturi quasi vero
        totam architecto ipsa?
      </p>
    </article>
  );
}

```

## src\pages\Home.tsx

```typescript
import { useLocation } from "react-router-dom";
export default function Home() {
  const loc = useLocation();

  return (
    <article>
      <hgroup>
        <h2>Home</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <p>
        Voluptates dolores quam provident natus possimus veritatis excepturi
        ipsam sed magni eum quae quis quisquam magnam nihil perspiciatis eos
        odit, esse non fugit sunt numquam. Totam eos iure culpa accusantium
        quidem ipsa quia dicta eum, repellat repudiandae laborum dolorem
        obcaecati corporis quam voluptates eaque natus adipisci molestiae,
        consectetur quasi sit iste, iusto amet! Vel nobis distinctio
        repellendus, magnam vero quasi? Possimus illo saepe cum quo? Corrupti
        non repellendus quis ratione iure recusandae vero laudantium rerum
        similique consequatur modi harum, consequuntur et? Placeat quaerat id
        dicta debitis excepturi quasi vero totam architecto ipsa?
      </p>
    </article>
  );
}

```

## src\pages\Post.tsx

```typescript
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TagList from "../components/TagList";
import axios from "axios";

export default function Post() {
  const loc = useLocation();
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const url = "https://dummyjson.com/posts/" + postId;
    axios
      .get(url)
      .then((response) => {
        setPost(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <article>
      <hgroup>
        <h2>{post?.title}</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <div style={{ display: "flex", gap: "10px" }}>
        <article>
          <TagList />
        </article>
        <article>{post?.body}</article>
      </div>
    </article>
  );
}

```

## src\pages\Posts.tsx

```typescript
import { useLocation, useParams } from "react-router-dom";
import TagList from "../components/TagList";
import PostsList from "../components/PostsList";

export default function Posts() {
  const loc = useLocation();
  const { tagName } = useParams<{ tagName?: string }>();
  return (
    <article>
      <hgroup>
        <h2>Posts{tagName ? ` with tag '${tagName}'` : ""}</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <div style={{ display: "flex", gap: "10px" }}>
        <article>
          <TagList />
        </article>
        <article>
          <PostsList tagName={tagName} />
        </article>
      </div>
    </article>
  );
}

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
})

```

# Дополнительные файлы

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homework 11</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    />
    <!-- Pico.css -->
    <!-- <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.classless.min.css"
    /> -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

