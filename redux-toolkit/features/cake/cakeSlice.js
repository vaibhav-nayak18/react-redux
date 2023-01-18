import toolkit from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 25,
};

const cakeSlice = toolkit.createSlice({
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
const cakeActions = cakeSlice.actions;
export default cakeReducer;
export { cakeActions };
