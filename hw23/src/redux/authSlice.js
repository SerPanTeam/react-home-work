import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    tokenExpires: localStorage.getItem("tokenExpires"),
  },
  reducers: {
    login: (state, action) => {
      const tokenExpires = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

      state.token = action.payload.token;
      state.user = action.payload.user;
      state.tokenExpires = tokenExpires;

      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("tokenExpires", tokenExpires);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.tokenExpires = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpires");
    },
  },
});

export const { login, logout } = authSlice.actions;
