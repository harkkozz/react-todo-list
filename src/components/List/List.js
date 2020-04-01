import React from 'react'
import './List.css';

const List = props => {
  return (
    <div className="list" onClick={props.taskDone}>
      <ul onClick={ props.taskDone }>
        <li>
          { props.text }
          <br />
          <span className="dateSpan">
            { props.date }
          </span>
        </li>
      </ul>
    </div>
  );
};

export default List;