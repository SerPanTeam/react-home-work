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
