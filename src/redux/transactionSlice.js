import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactionList: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactionList = action.payload;
    },
  },
});

export const { addTransaction, updateUserDetails } = transactionSlice.actions;
export default transactionSlice.reducer;
