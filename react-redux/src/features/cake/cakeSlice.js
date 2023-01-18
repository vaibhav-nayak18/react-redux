import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 25,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCake -= action.payload || 1;
    },
    restock: (state, action) => {
      state.numOfCake += action.payload || 5;
    },
  },
});

const cakeReducer = cakeSlice.reducer;
export default cakeReducer;
export const { ordered, restock } = cakeSlice.actions;
