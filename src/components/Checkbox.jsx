import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

const CheckBlock = styled.input`
  align-self: center;

  &:before {
    width: 28px;
    height: 28px;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    left: -7px;
    top: -7px;
    content: ' ';
    position: relative;
  }
`;

class Checkbox extends Component {
  render() {
    return (
      <Fragment>
        <CheckBlock
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
