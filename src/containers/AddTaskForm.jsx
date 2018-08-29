import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class AddTaskForm extends Component {
  state = {
    task: ''
  };

  handleTextChange = event => {
    this.setState({ task: event.target.value });
  };

  handleCreateTask = event => {
    event.preventDefault();

    const aNewTask = {
      summary: this.state.task
    };

    // Send New Task UpStream
    this.props.addTask(aNewTask);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleCreateTask}>
          <input
            name="summary"
            onChange={this.handleTextChange}
            value={this.state.task}
            type="text"
            placeholder="Whats your task?"
            required
          />
          <button type="submit">Add Task →</button>
        </form>
      </Fragment>
    );
  }
}

export default AddTaskForm;
