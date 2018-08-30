import React, { Fragment, Component } from 'react';

class Task extends Component {
  render() {
    const { index, content } = this.props;

    const handleTaskNumber = index + 1;

    return (
      <Fragment>
        <p>Task {handleTaskNumber} ...</p>

        <p>{content}</p>

        <button
          onClick={() => {
            this.props.taskStatus(index);
          }}
        >
          TOGGLE
        </button>
      </Fragment>
    );
  }
}

export default Task;
