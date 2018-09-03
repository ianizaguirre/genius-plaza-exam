import React, { Fragment } from 'react';
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
    left: -8px;
    top: -7px;
    content: ' ';
    position: relative;
  }
`;

const Checkbox = props => (
  <Fragment>
    <CheckBlock type="checkbox" checked={props.isChecked} />
  </Fragment>
);

export default Checkbox;
