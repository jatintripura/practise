import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

//card slice
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    //add to card
    addToCard: (state: any, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },
    clearCard: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectItemCard = (state: any) => state.card.items;
export const selectCardTotalPrice = (state: any) => state.card.totalPrice;
export const { addToCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
