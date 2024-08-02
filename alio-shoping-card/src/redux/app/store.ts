import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../feature/cardSlics";
const store = configureStore({
  reducer: { card: cardReducer },
});
export default store;
