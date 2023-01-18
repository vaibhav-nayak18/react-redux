import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/iceCreamSlice.js";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice.js";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefault) => getDefault().concat(logger),
});
export default store;
