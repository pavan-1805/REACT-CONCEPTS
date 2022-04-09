import React, { createContext, useReducer } from "react";
import ChildReducer from "./ChildReducer";
import ChildReducerTwo from "./ChildReducerTwo";

export const counterContext = createContext();
const initalState = 0;
const reducer = (state, action) => {
  console.log("state,action", state, action);
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

const ParentReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <counterContext.Provider value={{ state: state, dispatch: dispatch }}>
      <>count:{state}</>
      <ChildReducer />
      <ChildReducerTwo />
    </counterContext.Provider>
  );
};

export default ParentReducer;
