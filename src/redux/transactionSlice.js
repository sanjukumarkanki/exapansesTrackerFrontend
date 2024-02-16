import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    activeTab: 'electronics',
  },
  reducers: {
    activeTabSet: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { activeTabSet } = productSlice.actions;
export default productSlice.reducer;
