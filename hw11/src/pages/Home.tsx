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
