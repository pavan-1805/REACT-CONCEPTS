import { ActionTypes } from "../../../constants/CounterOneConstants";

const initialState = 0;

const counterReducer = (state = initialState, { type, payload }) => {
    console.log('counterReducer STATE pavan:',state);
  switch (type) {
    case ActionTypes.INCREMENT:
      return state+payload;
    case ActionTypes.DECREMENT:
      return state-payload;
    case ActionTypes.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
