import React from 'react'
import listStyles from './List.module.scss';

const List = props => {
  return (
    <div className={listStyles.list} onClick={props.taskDone}>
      <ul onClick={ props.taskDone }>
      <button className={listStyles.removeBtn} onClick={ props.removeItem }>X</button>
        <li>
          { props.index + 1 }.  
          { props.text }
          <br />
          <span className={listStyles.dateSpan}>
            { props.date }
          </span>
        </li>
      </ul>
    </div>
  );
};

export default List;