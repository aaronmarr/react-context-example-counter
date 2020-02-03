import React from 'react';
import { CounterConsumer } from './CounterContext';

class Counter extends React.Component {
  render() {
    return (
      // Here we’re implementing the consumer, which will give 
      // us access to values defined in the provider context.
      // The consumer accepts a single function as it’s child,  
      // and should return any elements or fragments.
      // The first argument of this function is whatever is passed 
      // into the 'value' property of the provider. In this case, 
      // it’s an object with 3 properties. We can destructure 
      // these using the render props pattern.
      <CounterConsumer>
        {({ counter, onIncrement, onDecrement }) => (
          <div className="counter">
            <h1 className="counter__count">Count: {counter}</h1>
            <button className="counter__inc" onClick={onIncrement}>+</button>  
            <button className="counter__dec" onClick={onDecrement}>-</button>   
          </div>
        )}
      </CounterConsumer>
    )
  }
};

export default Counter;