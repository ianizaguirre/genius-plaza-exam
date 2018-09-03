import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const GridContainer = styled.div`
  background: #fefefe;
  border-bottom: 1px solid #f5f7f8;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 18px;
  grid-template-columns: 100px 1fr 100px 100px;
  justify-items: center;
  align-items: baseline;
  padding: 12px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const NumberBlock = styled.div`
  justify-self: start;
  color: #0085b6;
`;

const ContentBlock = styled.div`
  justify-self: start;
`;

class Task extends Component {
  render() {
    const { index, content, id } = this.props;

    const handleTaskNumber = index + 1;

    return (
      <GridContainer>
        <NumberBlock>Task {handleTaskNumber} </NumberBlock>

        <ContentBlock>{content}</ContentBlock>

        <button
          onClick={() => {
            this.props.deleteTask(id, index);
          }}
        >
          Delete Task →
        </button>

        <Checkbox taskStatus={this.props.taskStatus} index={index} />
      </GridContainer>
    );
  }
}

export default Task;
