import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice.js";

const initialState = {
  numOfIceCream: 50,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream -= action.payload || 1;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload || 5;
    },
  },
  // extraReducers: {
  // ["cake/ordered"]: (state) => {
  //   state.numOfIceCream--;
  // },
  // },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

const icecreamReducer = iceCreamSlice.reducer;

export default icecreamReducer;
export const { ordered, restocked } = iceCreamSlice.actions;
