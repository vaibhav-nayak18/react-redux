import toolkit from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/iceCreamSlice.js";
import reduxLogger from "redux-logger";

const logger = reduxLogger.createLogger();

const store = toolkit.configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefault) => getDefault().concat(logger),
});
export default store;
