import React from 'react';
import inputStyles from './Input.module.scss';

const Input = (props) => {
  return (
    <div className={inputStyles.customInput}>
      <input 
        value={props.inputValue}
        onChange={props.onInputChange}
        onKeyPress={props.onEnterPressed}
        placeholder="Add new item ..."
      ></input>
      <span></span>
      <button className={inputStyles.addItemButton} onClick={props.addItemInList}>+</button>
    </div>
  )
}

export default Input;