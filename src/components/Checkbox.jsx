import React, { Fragment, Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          onChange={() => {
            this.props.taskStatus(this.props.index);
          }}
        />
      </Fragment>
    );
  }
}

export default Checkbox;
