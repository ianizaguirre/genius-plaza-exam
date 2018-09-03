import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 25px;
`;
const Input = styled.input`
  color: #4c4c4c;
  background-color: #ffffff;
  font-size: 14px;
  height: 28px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 4px 16px;
  transition: background-color linear 0.2s, border-color linear 0.2s, box-shadow linear 0.2s,
    -webkit-box-shadow linear 0.2s;
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #82b541;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 16px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #75a23a;
  }
`;

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

    // If truthy
    if (makeNewTask.content) {
      // Send Newly Created Task UpStream
      this.props.addTask(makeNewTask);
    }

    // Clear Form Input
    event.currentTarget.reset();
    this.setState({ content: '' });
  };

  handleKeyPress = event => {
    var ENTER_KEY = 13;

    // var Command_KEY = 93;

    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      return this.handleSubmit(event);
    }
  };

  render() {
    return (
      <Wrapper>
        <form
          onSubmit={this.handleSubmit}
          onKeyUp={event => {
            this.handleKeyPress(event);
          }}
        >
          <Input
            name="summary"
            onChange={this.handleTextChange}
            value={this.state.content}
            type="text"
            placeholder="Whats your task?"
            autoComplete="off"
            autoFocus
            required
          />

          <Button type="submit">Add Task →</Button>
        </form>
      </Wrapper>
    );
  }
}

export default AddTaskForm;
