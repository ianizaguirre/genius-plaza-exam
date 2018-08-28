import React, { Fragment } from 'react';
import logo from './../logo.svg';

import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: #fff;
  text-align: center;
`;
const Logo = styled.img`
  height: 80px;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <Fragment>
    <Wrapper>
      <Logo src={logo} className="App-logo" alt="logo" />

      <Title>Welcome to React</Title>

      <p>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Wrapper>
  </Fragment>
);

export default Header;
