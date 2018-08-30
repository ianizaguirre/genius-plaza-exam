import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class AddTaskForm extends Component {
  state = {
    content: '',
    completed: false
  };

  handleTextChange = event => {
    this.setState({ content: event.target.value });
  };

  handleCreateTask = event => {
    event.preventDefault();

    const makeNewTask = {
      id: Date.now(),
      content: this.state.content,
      completed: this.state.completed
    };

    // Send New Task UpStream
    this.props.addTask(makeNewTask);

    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleCreateTask}>
          <input
            name="summary"
            onChange={this.handleTextChange}
            value={this.state.content}
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
