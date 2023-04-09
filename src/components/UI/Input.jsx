import React from 'react';
import './Input.css';
const Input = React.forwardRef((props,ref) => {
  return (
    <div className='input'>
        <label>{props.label}</label>
       <input ref={ref} className='input-feild' id={props.id} {...props.input}/>
    </div>
  )
});

export default Input;