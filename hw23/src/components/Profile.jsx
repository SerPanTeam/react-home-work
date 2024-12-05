import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, createAvatarUrl } from "../api";
import { logout } from "../redux/authSlice";

export default function Profile() {
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!userData) {
    return (
      <div>
        <h1>You're not logged in</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={createAvatarUrl(userData)} alt={userData.name} />

      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
