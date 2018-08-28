import React, { Component, Fragment } from 'react';
import Header from './../components/Header';
import ToDoList from './../components/ToDoList.jsx';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <ToDoList />
      </Fragment>
    );
  }
}

export default App;
