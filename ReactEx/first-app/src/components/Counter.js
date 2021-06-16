import React from 'react';

//functional component
const Counter = (props) => (
    <div>
        <h2>{props.count}</h2>
        <button onClick={props.incrementCount}>Increment</button>
        <button onClick={props.decrementCount}>Decrement</button>
    </div>
)


export default Counter