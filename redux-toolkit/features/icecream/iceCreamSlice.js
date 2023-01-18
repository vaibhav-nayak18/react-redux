import toolkit from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
  numOfIceCream: 50,
};

const iceCreamSlice = toolkit.createSlice({
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

const icecreamReducer = iceCreamSlice.reducer;
const icecreamActions = iceCreamSlice.actions;

export default icecreamReducer;
export { icecreamActions };
