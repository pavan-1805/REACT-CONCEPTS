import React, { useContext } from "react";
import { counterContext } from "./ParentReducers";

const ChildReducer = () => {
  const { state, dispatch } = useContext(counterContext);
  console.log({ state, dispatch });
  return (
    <div> count: {state}<br></br>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default ChildReducer;
