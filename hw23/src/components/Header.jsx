import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const user = useSelector((state) => state.auth.user);

  function renderLinks() {
    if (user) {
      return (
        <ul>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>ICH Tasks</strong>
          </Link>
        </li>
      </ul>
      {renderLinks()}
    </nav>
  );
}
