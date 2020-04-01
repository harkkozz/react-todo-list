import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className="custom-input">
      <input 
        value={props.inputValue}
        onChange={props.onInputChange}
        onKeyPress={props.onEnterPressed}
        placeholder="Add new item ..."
      ></input>
      <button className="add-item-button" onClick={props.addItemInList}>+</button>
    </div>
  )
}

export default Input;