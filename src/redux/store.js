import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";


const initialState = {
  account: {
    balance: 0,
  }
};

// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };  

};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
