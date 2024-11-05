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
