
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import React from 'react'

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
    <main>
        <h1>Counter(Redux)</h1>
        <div>{counter}</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    </main>
  )
}
