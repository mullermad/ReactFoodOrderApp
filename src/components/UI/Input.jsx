import React from 'react'
import './Input.css';
const Input = (props) => {
  return (
    <div className='input'>
        <label>{props.label}</label>
       <input className='input-feild' id={props.id} {...props.input}/>
    </div>
  )
}

export default Input;