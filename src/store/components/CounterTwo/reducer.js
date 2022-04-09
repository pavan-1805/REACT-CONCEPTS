import { CounterTwoActionTypes } from "../../../constants/CounterTwoConstants";

const initialState = {
  counterOne: 0,
  CounterTwo: 10,
  inputValue: ""
};

const counterTwoReducer = (state = initialState, { type, payload }) => {
  console.log("counterTwoReducer STATE:", state);
  switch (type) {
    case CounterTwoActionTypes.STORE_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload
      };
    case CounterTwoActionTypes.INCREMENT_TWO:
      return {
        ...state,
        counterOne: state.counterOne + payload
      };
    case CounterTwoActionTypes.DECREMENT_TWO:
      return {
        ...state,
        counterOne: state.counterOne - payload
      };
    case CounterTwoActionTypes.RESET_TWO:
      return {
        ...state,
        counterOne: 0
      };
    case CounterTwoActionTypes.SECOND_INCREMENT_TWO:
      return {
        ...state,
        CounterTwo: state.CounterTwo + payload
      };
    case CounterTwoActionTypes.SECOND_DECREMENT_TWO:
      return {
        ...state,
        CounterTwo: state.CounterTwo - payload
      };
    case CounterTwoActionTypes.SECOND_RESET_TWO:
      return {
        ...state,
        CounterTwo: 10
      };
    default:
      return state;
  }
};

export default counterTwoReducer;
