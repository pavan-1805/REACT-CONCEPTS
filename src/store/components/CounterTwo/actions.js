import { CounterTwoActionTypes } from "../../../constants/CounterTwoConstants";

export const incrementerTwo = (data) => ({
  type: CounterTwoActionTypes.INCREMENT_TWO,
  payload: data
});
export const decrementerTwo = (data) => ({
  type: CounterTwoActionTypes.DECREMENT_TWO,
  payload: data
});
export const resetTwo = (data) => ({
  type: CounterTwoActionTypes.RESET_TWO,
  payload: data
});

export const secondIncrementerTwo = (data) => ({
  type: CounterTwoActionTypes.SECOND_INCREMENT_TWO,
  payload: data
});
export const secondDecrementerTwo = (data) => ({
  type: CounterTwoActionTypes.SECOND_DECREMENT_TWO,
  payload: data
});
export const secondResetTwo = (data) => ({
  type: CounterTwoActionTypes.SECOND_RESET_TWO,
  payload: data
});
export const storeInputValue = (data) => ({
  type:CounterTwoActionTypes.STORE_INPUT_VALUE,
  payload:data
})

