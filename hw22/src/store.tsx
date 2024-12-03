import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
