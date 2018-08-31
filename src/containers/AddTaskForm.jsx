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

  handleSubmit = event => {
    event.preventDefault();

    const makeNewTask = {
      id: Date.now(),
      content: this.state.content.trim(),
      completed: this.state.completed
    };

    if (makeNewTask.content) {
      // Send Newly Created Task UpStream
      this.props.addTask(makeNewTask);
    }

    // Clear Form Input
    event.currentTarget.reset();
    this.setState({ content: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            name="summary"
            onChange={this.handleTextChange}
            value={this.state.content}
            type="text"
            placeholder="Whats your task?"
            autoFocus
            required
          />

          <button type="submit">Add Task →</button>
        </form>
      </Fragment>
    );
  }
}

export default AddTaskForm;
