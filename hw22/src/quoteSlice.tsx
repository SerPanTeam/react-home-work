import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Quote {
  quoteText: string;
  quoteAutor: string;
  status: string | null | undefined;
  error: null | string | undefined;
}

const initialState: Quote = {
  quoteText: "",
  quoteAutor: "",
  status: "idle",
  error: null,
};

export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await axios.get("https://dummyjson.com/quotes/random");
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
        state.quoteText = action.payload.quote; 
        state.quoteAutor = action.payload.author; 
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
export const { newQuote} = quoteSlice.actions;
