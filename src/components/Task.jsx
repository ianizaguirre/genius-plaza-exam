import React, { Fragment, Component } from 'react';
import Checkbox from './Checkbox';

class Task extends Component {
  render() {
    const { index, content, id } = this.props;

    const handleTaskNumber = index + 1;

    return (
      <Fragment>
        <Checkbox taskStatus={this.props.taskStatus} index={index} />

        <button
          onClick={() => {
            this.props.deleteTask(id, index);
          }}
        >
          Delete Task →
        </button>

        <p>Task {handleTaskNumber} ...</p>

        <p>{content}</p>
      </Fragment>
    );
  }
}

export default Task;
