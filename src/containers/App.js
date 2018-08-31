import React, { Component, Fragment } from 'react';

import Header from './../components/Header';
import Page from './../components/Page';
import Inventory from './../components/Inventory';
import Counter from './../components/Counter';

import AddTaskForm from './AddTaskForm';

class App extends Component {
  state = {
    toDoList: [],
    activeCount: 0
  };

  handleAddTask = newTask => {
    const toDoList = [...this.state.toDoList, newTask];

    this.setState({
      toDoList,
      activeCount: this.state.activeCount + 1
    });
  };

  updateActiveCount = (taskForUpdate, taskIndex, conditionIf, conditionElse) => {
    if (taskForUpdate[taskIndex].completed === conditionIf) {
      this.setState({
        activeCount: this.state.activeCount - 1
      });
    } else if (taskForUpdate[taskIndex].completed === conditionElse) {
      this.setState({
        activeCount: this.state.activeCount + 1
      });
    }
  };

  updateTaskStatus = (taskIndex, taskForUpdate) => {
    taskForUpdate[taskIndex].completed = !taskForUpdate[taskIndex].completed;

    this.setState({
      toDoList: taskForUpdate
    });
  };

  handleTaskStatus = taskIndex => {
    const taskForUpdate = [...this.state.toDoList];
    this.updateTaskStatus(taskIndex, taskForUpdate);

    // ============
    this.updateActiveCount(taskForUpdate, taskIndex, true, false);
    // ============
  };

  handleDeleteTask = (taskID, taskIndex) => {
    const survivingTasks = this.state.toDoList.filter(item => {
      return item.id !== taskID;
    });

    // ============
    const taskForUpdate = [...this.state.toDoList];
    this.updateActiveCount(taskForUpdate, taskIndex, false, undefined);
    // ============

    this.setState({
      toDoList: survivingTasks
    });
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
