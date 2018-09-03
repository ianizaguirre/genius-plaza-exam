import React from 'react';
import styled from 'styled-components';

import Task from './Task';

const Ul = styled.ul`
  padding: 0;
`;

const Inventory = props => (
  <Ul>
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
  </Ul>
);

export default Inventory;
