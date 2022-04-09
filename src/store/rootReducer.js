import { combineReducers } from "redux";
import counterReducer from "./components/Counter/reducer";
import counterTwoReducer from "./components/CounterTwo/reducer";


const rootReducer = combineReducers({
    counterReducer,
    counterTwoReducer
})

export default rootReducer