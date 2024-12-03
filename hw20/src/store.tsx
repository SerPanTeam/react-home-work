import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
