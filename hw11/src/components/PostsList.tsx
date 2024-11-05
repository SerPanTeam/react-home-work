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
