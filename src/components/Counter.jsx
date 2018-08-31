import React, { Fragment, Component } from 'react';

class Counter extends Component {
  render() {
    // const { index, content, id } = this.props;

    // const handleTaskNumber = index + 1;

    const handleTaskNumber = 1;

    return (
      <Fragment>
        <p> {handleTaskNumber} itemSS left</p>
      </Fragment>
    );
  }
}

export default Counter;
