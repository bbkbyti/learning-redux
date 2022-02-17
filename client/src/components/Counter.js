
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import React from 'react';
import classes from './Counter.module.css';

export default function Counter() {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const toggleHandler = () => {
        dispatch(counterActions.toggle());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    return (
        <main className={classes.counter}>
            <h1>Counter(Redux)</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={toggleHandler}>Toggle Counter</button>
            </div>
        </main>
    )
}
