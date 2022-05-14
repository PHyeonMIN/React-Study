import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";


// configureStore : 여러개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.
const store = configureStore({
  reducer: { counter: counterReducer , auth: authReducer },
});




export default store;





/*
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,       // 설정하지 않으면 객체가 사라짐 ( undefined )
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

// 리덕스 스토어를 만들어준다.
const store = createStore(counterReducer);  // 하나의 리듀서만 넣어준다.
*/
