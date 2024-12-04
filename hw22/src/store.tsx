import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quoteSlice";
import { useDispatch } from "react-redux";


export const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Типизация dispatch
export type AppDispatch = typeof store.dispatch;

// Кастомный хук для типизированного dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;