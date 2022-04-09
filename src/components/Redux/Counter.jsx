import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementer, decrementer, reset } from '../../store/components/Counter/actions'


const Counter = () => {
    const value = useSelector((pavan)=>pavan.counterReducer)
    console.log('value',value);
    const dispatch = useDispatch()
  return (
    <div>
        <input type='text' value={value}></input><br></br>
        <button onClick={()=>dispatch(incrementer(5))}>Increment</button>
        <button onClick={()=>dispatch(decrementer(1))}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter