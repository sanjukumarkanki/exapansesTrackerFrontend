import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./transactionSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
