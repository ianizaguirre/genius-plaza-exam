import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;
const Text = styled.p`
  color: #9d9e9f;
  letter-spacing: 1px;
  font-size: 18px;
`;
class Counter extends Component {
  render() {
    const { activeCount } = this.props;

    const pluralize = Object.values({ activeCount })[0];

    // console.log(pluralize);
    // console.log(typeof pluralize);

    const item_S = pluralize === 1 ? 'item' : 'items';

    return (
      <Wrapper>
        <Text>
          <strong>{activeCount}</strong> {item_S} left to Complete
        </Text>
      </Wrapper>
    );
  }
}

export default Counter;
