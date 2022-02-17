
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import React from 'react';
import classes from './Counter.module.css';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

  return (
    <main className={classes.counter}>
        <h1>Counter(Redux)</h1>
        <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    </main>
  )
}
