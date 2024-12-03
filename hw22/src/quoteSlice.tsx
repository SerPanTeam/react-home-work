import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Quote {
  quoteText: string;
  quoteAutor: string;
  status: string;
  error: null | string;
}

const initialState: Quote = {
  quoteText: "",
  quoteAutor: "",
  status: "idle",
  error: null,
};

// Асинхронное действие для получения случайной цитаты
export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await axios.get("https://api.quotable.io/random");
    return response.data;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    newQuote(state) {
      console.log(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
export const { newQuote } = quoteSlice.actions;
