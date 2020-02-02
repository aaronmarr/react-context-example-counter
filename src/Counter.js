import React from 'react';
import { CounterConsumer } from './CounterContext';

const Counter = () => (
  // Here we're implementing the consumer, which will give us access
  // to anything which was defined in the provider context.
  // The consumer accepts a single function as it's child. This function
  // should be used to return any elements or fragments.
  // The first argument of this function, is whatever we passed into the
  // value property of the provider. In this case, it's an object with
  // 3 properties which we can destructure and utilise within this component
  <CounterConsumer>
    {({ counter, onIncrement, onDecrement }) => (
      <div className="counter">
        <h1 className="counter__count">Count: {counter}</h1>
        <button className="counter__inc" onClick={onIncrement}>+</button>  
        <button className="counter__dec" onClick={onDecrement}>-</button>   
      </div>
    )}
  </CounterConsumer>
);

export default Counter;