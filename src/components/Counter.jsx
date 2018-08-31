import React, { Fragment, Component } from 'react';

class Counter extends Component {
  render() {
    const { activeCount } = this.props;

    const pluralize = Object.values({ activeCount })[0];

    // console.log(pluralize);
    // console.log(typeof pluralize);

    const item_S = pluralize === 1 ? 'item' : 'items';

    return (
      <Fragment>
        <p>
          <strong>{activeCount}</strong> {item_S} left
        </p>
      </Fragment>
    );
  }
}

export default Counter;
