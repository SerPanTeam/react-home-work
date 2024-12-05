import { useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");

    const authData = {
      identity: email,
      password,
    };
    const authUrl = API_URL + "/api/collections/users/auth-with-password";

    axios
      .post(authUrl, authData)
      .then((response) => {
        dispatch(
          login({
            user: response.data.record,
            token: response.data.token,
          })
        );
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <label>
        Email:
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
