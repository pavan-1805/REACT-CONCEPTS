import React,{memo} from 'react'

const Button = ({buttonName,handleClick}) => {
    console.log(`${buttonName} LOG`);
  return (
    <div><button onClick={handleClick}>{buttonName}</button></div>
  )
}

export default memo(Button)