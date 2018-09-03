import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
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
        <p>
          <strong>{activeCount}</strong> {item_S} left
        </p>
      </Wrapper>
    );
  }
}

export default Counter;
