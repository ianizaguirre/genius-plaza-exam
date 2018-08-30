import React, { Fragment } from 'react';

import Task from './Task';

const Inventory = props => (
  <Fragment>
    {props.toDoList.map((item, index) => (
      <Task key={item.id} index={index} content={item.content} taskStatus={props.taskStatus} />
    ))}
  </Fragment>
);

export default Inventory;
