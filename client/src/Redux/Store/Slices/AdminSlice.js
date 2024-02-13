import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    descuento: "20%",
  },
  reducers: {
    setDescuento(state, action) {
      state.descuento = action.payload;
    },
  },
});

export const { setDescuento } = adminSlice.actions;

export default adminSlice.reducer;
