import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  return (
    <>
      <h2>List user</h2>
      <button onClick={() => navigate("/user")}>Create new user</button>
      <article style={{ display: "flex", justifyContent: "space-between" }}>
        <p>User name 1111111111</p>
        <div role="group1">
          <button className="secondary">Edit</button>
          <button className="contrast">Delete</button>
        </div>
      </article>

      <article style={{ display: "flex", justifyContent: "space-between" }}>
        <p>User name 1111111111</p>
        <div role="group1">
          <button className="secondary">Edit</button>
          <button className="contrast">Delete</button>
        </div>
      </article>
    </>
  );
}
