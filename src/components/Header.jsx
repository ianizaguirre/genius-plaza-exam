import React from 'react';
import styled from 'styled-components';
import logo from './../logo.png';

const Wrapper = styled.header`
  background-color: #33a8a5;
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
  letter-spacing: 0.5px;
`;

const Header = () => (
  <Wrapper>
    <Title>Genius Plaza Todo App Test</Title>
    <Logo src={logo} className="App-logo" alt="logo" />
  </Wrapper>
);

export default Header;
