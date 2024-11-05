import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TagList from "../components/TagList";
import axios from "axios";

interface IPost{
  title:string,
  body:string,
}

export default function Post() {
  const loc = useLocation();
  const { postId } = useParams();
  const [post, setPost] = useState<IPost>();

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
