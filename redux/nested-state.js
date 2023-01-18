const redux = require("redux");
const produce = require("immer").produce;
const print = console.log;

const initialState = {
  name: {
    firstName: "Vaibhav",
    lastName: "Nayak",
  },
  age: 21,
  address: {
    street: "123 main st",
    city: "boston",
    state: "MA",
  },
  gender: "male",
};

const STREET_UPDATE = "STREET_UPDATE";

function updateStreet(street) {
  return {
    type: "STREET_UPDATE",
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.legacy_createStore(reducer);

print("initial state", store.getState());

const subscribe = store.subscribe(() => {
  print("updated state", store.getState());
});

store.dispatch(updateStreet("456 sub st"));

print("initial state", store.getState());
