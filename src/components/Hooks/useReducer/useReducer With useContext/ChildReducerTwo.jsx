import React, { useContext } from 'react'
import { counterContext } from './ParentReducers'

const ChildReducerTwo = () => {
    const {state,dispatch} = useContext(counterContext)
    console.log({state,dispatch});
  return (
    <div>
        
    </div>
  )
}

export default ChildReducerTwo