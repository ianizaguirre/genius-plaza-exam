import React, { Fragment, Component } from 'react';
import Checkbox from './Checkbox';

class Task extends Component {
  render() {
    const { index, content } = this.props;

    const handleTaskNumber = index + 1;

    return (
      <Fragment>
        <Checkbox taskStatus={this.props.taskStatus} index={this.props.index} />

        <p>Task {handleTaskNumber} ...</p>

        <p>{content}</p>
      </Fragment>
    );
  }
}

export default Task;
