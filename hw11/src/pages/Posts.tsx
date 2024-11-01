import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

export default function Posts() {
  const loc = useLocation();
  useEffect( () => {
    const tags =  axios.get('https://dummyjson.com/posts/tag-list');
    console.log(tags);
  }, [])


  return (
    <article>
      <hgroup>
        <h2>Posts</h2>
        <p>{loc.pathname}</p>
      </hgroup>
      <div style={{ display: "flex", gap: "10px" }}>
        <article>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </article>
        <article>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </article>
      </div>
    </article>
  );
}
