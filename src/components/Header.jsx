import React, { Fragment } from 'react';
import logo from './../logo.png';

import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;
`;
const Logo = styled.img`
  height: 145px;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <Fragment>
    <Wrapper>
      <Title>To-Do List</Title>
      <Logo src={logo} className="App-logo" alt="logo" />
    </Wrapper>
  </Fragment>
);

export default Header;
