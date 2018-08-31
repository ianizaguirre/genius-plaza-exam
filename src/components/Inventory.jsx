import React, { Fragment } from 'react';

import Task from './Task';

const Inventory = props => (
  <Fragment>
    {props.toDoList.map((item, index) => (
      <Task
        key={item.id}
        id={item.id}
        index={index}
        content={item.content}
        taskStatus={props.taskStatus}
        deleteTask={props.deleteTask}
      />
    ))}
  </Fragment>
);

export default Inventory;
