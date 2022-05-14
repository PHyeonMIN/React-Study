const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // 업데이트된 후에 최신 상태 스냅샷을 제공 // 이 구독함수가 상태가 변경될떄마다 트리거

  const latestState = store.getState();
  console.log(latestState);
};

store.subscibe(counterSubscriber);

// dispatch() 액션을 발송하는 메소드
// 2번째 실행
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
