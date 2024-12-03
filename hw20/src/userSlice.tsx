import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
    { id: 4, name: "David Wilson", email: "david.wilson@example.com" },
    { id: 5, name: "Eve Davis", email: "eve.davis@example.com" },
    { id: 6, name: "Frank Miller", email: "frank.miller@example.com" },
    { id: 7, name: "Grace Lee", email: "grace.lee@example.com" },
    { id: 8, name: "Hannah Taylor", email: "hannah.taylor@example.com" },
    { id: 9, name: "Ian Walker", email: "ian.walker@example.com" },
    { id: 10, name: "Julia Hall", email: "julia.hall@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser(state, action) {
      //state.push(action.payload);
    // },
    // delUser(state, action) {},
    // resetUsers(state, action) {},
  },
});

// export const { addUser} = userSlice.actions;
export default userSlice.reducer;