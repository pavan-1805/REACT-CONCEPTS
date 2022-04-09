import { ActionTypes } from "../../../constants/CounterOneConstants";

export const incrementer = (data) => {
  return {
    type: ActionTypes.INCREMENT,
    payload: data
  };
};
export const decrementer = (data) => ({
  type: ActionTypes.DECREMENT,
  payload: data
});
export const reset = (data) => ({
  type: ActionTypes.RESET,
  payload: data
});
