import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;