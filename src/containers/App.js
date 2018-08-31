import React, { Component, Fragment } from 'react';

import Header from './../components/Header';
import Page from './../components/Page';
import Inventory from './../components/Inventory.jsx';

import AddTaskForm from './AddTaskForm.jsx';

class App extends Component {
  state = {
    toDoList: []
  };

  handleAddTask = newTask => {
    const toDoList = [...this.state.toDoList, newTask];
    this.setState({ toDoList });
  };

  handleTaskStatus = taskIndex => {
    const taskForUpdate = [...this.state.toDoList];
    taskForUpdate[taskIndex].completed = !taskForUpdate[taskIndex].completed;
    this.setState({ toDoList: taskForUpdate });
  };

  // handleDeleteTask = taskIndex => {

  //   const taskForUpdate = this.state.toDoList.filter((_, itemIndex) => {
  //     return itemIndex !== taskIndex;
  //   });

  //   this.setState({ toDoList: taskForUpdate });
  // };

  handleDeleteTask = taskID => {
    const taskForUpdate = this.state.toDoList.filter(item => {
      return item.id !== taskID;
    });

    this.setState({ toDoList: taskForUpdate });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Page>
          <AddTaskForm addTask={this.handleAddTask} />
          <Inventory
            toDoList={this.state.toDoList}
            taskStatus={this.handleTaskStatus}
            deleteTask={this.handleDeleteTask}
          />
        </Page>
      </Fragment>
    );
  }
}

export default App;
