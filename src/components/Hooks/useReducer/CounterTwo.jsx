import React, { useReducer } from "react";

const initalState = {
  counterOne: 0,
  counterTwo: 10
};
const reducer = (state, { type, payload }) => {
  console.log("state,action", state, { type, payload });
  switch (type) {
    case "increment":
      return { ...state,counterOne: state.counterOne + payload };
    case "decrement":
      return { ...state,counterOne: state.counterOne - payload };
    case "secondIncrement":
      return { ...state,counterTwo: state.counterTwo + payload };
    case "secondDecrement":
      return { ...state,counterTwo: state.counterTwo - payload };
    case "reset":
      return initalState;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [{counterOne,counterTwo}, dispatch] = useReducer(reducer, initalState);
  console.log("state,dispatch", {counterOne,counterTwo}, dispatch);
  return (
    <div>
      <h1>REDUCER</h1>
      <div>countOne: {counterOne}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
          Decrement
        </button>
      </div>
      <div>countTwo: {counterTwo}</div>
      <div>
        <button
          onClick={() => dispatch({ type: "secondIncrement", payload: 10 })}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "secondDecrement", payload: 20 })}
        >
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
