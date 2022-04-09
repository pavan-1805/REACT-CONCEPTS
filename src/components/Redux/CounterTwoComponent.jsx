import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementerTwo,
  decrementerTwo,
  resetTwo,
  secondIncrementerTwo,
  secondDecrementerTwo,
  secondResetTwo
} from "../../store/components/CounterTwo/actions";

const CounterTwoComponent = () => {
  const { counterOne, CounterTwo } = useSelector(
    (pavan) => pavan.counterTwoReducer
  );
  console.log(counterOne, CounterTwo);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        FIRST COUNTER<br></br>
        <input type="text" value={counterOne}></input>
        <br></br>
        <button onClick={() => dispatch(incrementerTwo(5))}>Increment</button>
        <button onClick={() => dispatch(decrementerTwo(1))}>Decrement</button>
        <button onClick={() => dispatch(resetTwo())}>Reset</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        SECOND COUNTER<br></br>
        <input type="text" value={CounterTwo}></input>
        <br></br>
        <button onClick={() => dispatch(secondIncrementerTwo(5))}>Increment</button>
        <button onClick={() => dispatch(secondDecrementerTwo(1))}>Decrement</button>
        <button onClick={() => dispatch(secondResetTwo())}>Reset</button>
      </div>
    </>
  );
};

export default CounterTwoComponent;
