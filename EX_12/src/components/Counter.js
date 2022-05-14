import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter"; 
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); // Redux store에 대한 action을 전송
  const counter = useSelector((state) => state.counter.counter); // 자동으로 리덕스 스토어가 바뀐다면 컴포넌트 함수가 다시 실행 -> 항상 최신 state
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {

    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div> 
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
// 클래스 기반 컴포넌트가 있는 리덕스
import {Component} from 'react';
import {connect} from 'react-redux';
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler(){

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter : state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment:() => dispatch({type:'increment'}),
    decrement:() => dispatch({type:'decrement'})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
*/
