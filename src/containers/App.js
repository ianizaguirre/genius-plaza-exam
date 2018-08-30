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

  render() {
    return (
      <Fragment>
        <Header />
        <Page>
          <AddTaskForm addTask={this.handleAddTask} />
          <Inventory toDoList={this.state.toDoList} taskStatus={this.handleTaskStatus} />
        </Page>
      </Fragment>
    );
  }
}

export default App;
