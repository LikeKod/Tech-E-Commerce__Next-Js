import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [];

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === Number(id));
      if (!existingItem) {
        const { name, sku, price } = action.payload;
        state.push({
          id,
          name,
          sku,
          price,
          qty: 1,
        });
      } else {
        const itemIndex = state.findIndex((item) => item.id === Number(id));
        if (itemIndex !== -1) {
          state[itemIndex].qty += 1;
        }
      }
    },

    decrementCartQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === Number(id));
      if (existingItem?.qty === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        const itemIndex = state.findIndex((item) => item.id === Number(id));
        if (itemIndex !== -1) {
          state[itemIndex].qty -= 1;
        }
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== Number(id));
    },
  },
});

//export the reducers(actions)
export const { incrementCartQty, decrementCartQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
