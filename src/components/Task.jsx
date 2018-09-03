import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Li = styled.li`
  list-style: none;
  background: #fefefe;
  border-bottom: 1px solid #f5f7f8;

  cursor: pointer;

  &:hover {
    background: #f5f7f8;
  }
`;

const GridContainerMain = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 100px;
  align-items: baseline;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 18px;
  grid-template-columns: 150px 1fr 100px;
  justify-items: center;
  align-items: baseline;
  padding: 20px 12px 20px 12px;
`;

const NumberBlock = styled.div`
  justify-self: start;
  color: #0085b6;
  font-weight: 700;
`;

const ContentBlock = styled.div`
  justify-self: start;
  color: #0085b6;
`;

// =====

const Button = styled.button`
  color: #333;
  background-color: #fefefe;
  border: 1px solid #DF2980;
  font-size: 13px;
  line-height: 15px;
  margin: 0 auto;
  width: 100%;
  padding: 8px 0px;
  cursor: pointer;

  // display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};
    visibility: ${props => (props.buttonIsVisible ? 'visible' : 'hidden')};

  font-weight: 400;

  &:hover {
    color: #DF2980;
    background-color: #edeced;
    outline: 0;
    border-color: transparent;
  }
`;

// =====

class Task extends Component {
  state = {
    isMouseOnTask: false,
    isChecked: false
  };

  handleDeleteTask = (id, index) => {
    this.props.deleteTask(id, index);
  };

  mouseEnter = e => {
    this.setState({ isMouseOnTask: true });
  };
  mouseLeave = e => {
    this.setState({ isMouseOnTask: false });
  };

  toggleIsChecked = e => {
    this.setState({ isChecked: !this.state.isChecked });
    this.props.taskStatus(this.props.index);
  };

  render() {
    const { index, content, id } = this.props;

    const formatTaskNumber = index + 1;

    return (
      <Li onMouseEnter={e => this.mouseEnter(e)} onMouseLeave={e => this.mouseLeave(e)}>
        <GridContainerMain>
          <GridContainer onClick={e => this.toggleIsChecked(e)} onMouseEnter={e => this.mouseEnter(e)}>
            <NumberBlock>Task {formatTaskNumber} </NumberBlock>

            <ContentBlock>{content}</ContentBlock>

            <Checkbox taskStatus={this.props.taskStatus} index={index} isChecked={this.state.isChecked} />
          </GridContainer>
          <Button
            buttonIsVisible={this.state.isMouseOnTask}
            onClick={() => {
              this.handleDeleteTask(id, index);
            }}
          >
            Delete task
          </Button>
        </GridContainerMain>
      </Li>
    );
  }
}

export default Task;
