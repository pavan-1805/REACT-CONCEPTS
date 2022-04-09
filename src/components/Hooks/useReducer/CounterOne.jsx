import React, { useReducer } from "react";

const initalState = 0
const reducer = (state, action) => {
  console.log('state,action',state,action);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h1>REDUCER</h1>
      <div>count: {state}</div>
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterOne;
