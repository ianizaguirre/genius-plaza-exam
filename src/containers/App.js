import React, { Component, Fragment } from 'react';

import Header from './../components/Header';
import Page from './../components/Page';
import Inventory from './../components/Inventory.jsx';

import AddTaskForm from './AddTaskForm.jsx';

class App extends Component {
  state = {
    taskList: {}
  };

  handleAddTask = newTask => {
    // console.log('newTask');
    // console.log(newTask);

    const taskList = { ...this.state.taskList };

    taskList[`Task-id#_${Date.now()}`] = newTask;

    this.setState({ taskList });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Page>
          <AddTaskForm addTask={this.handleAddTask} />
          <Inventory />
        </Page>
      </Fragment>
    );
  }
}

export default App;
