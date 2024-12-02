import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image:string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    delItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((val) => val.id != action.payload);
    },
  },
});

export const { addItem, delItem } = cartSlice.actions;

export default cartSlice.reducer;
