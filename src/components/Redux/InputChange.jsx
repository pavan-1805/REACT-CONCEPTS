import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeInputValue } from "../../store/components/CounterTwo/actions";

const InputChange = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const {inputValue} = useSelector(state=>state.counterTwoReducer)
    console.log('inputValue:',inputValue);
    
  return (
    <div>
      <h3>InputChnage</h3>
      <input type='text' onChange={(e)=>setValue(e.target.value)}></input>
      <button onClick={()=>dispatch(storeInputValue(value))}>save</button>
      <h1>{inputValue}</h1>
    </div>
  );
};

export default InputChange;
