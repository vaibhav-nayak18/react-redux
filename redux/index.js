const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducer = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const middleWare = redux.applyMiddleware;

const print = console.log;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_BAKED = "CAKE_BAKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORE = "ICECREAM_RESTORE";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function addCake(qty = 5) {
  return {
    type: CAKE_BAKED,
    payload: qty,
  };
}
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function addIceCream(qty = 5) {
  return {
    type: ICECREAM_RESTORE,
    payload: qty,
  };
}

const initialCake = {
  noOfCakes: 25,
};

const initialIceCream = {
  noOfIceCream: 50,
};

//  (previousState, action) => newState

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    case CAKE_BAKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - action.payload,
      };
    case ICECREAM_RESTORE:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

const store = createStore(rootReducer, middleWare(logger));

const unSubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake(3));
// store.dispatch(orderCake());
// store.dispatch(orderIceCream(10));
// store.dispatch(addCake());

unSubscribe();
store.dispatch(orderCake());
