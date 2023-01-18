import store from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { icecreamActions } from "./features/icecream/iceCreamSlice.js";

// console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered(10));
// store.dispatch(cakeActions.restock(100));
// store.dispatch(icecreamActions.ordered(25));
// store.dispatch(icecreamActions.restocked(10));
unsubscribe();
