import React, { Fragment } from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
//   background: #f7f7f7;
// `;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Page = ({ children }) => (
  <Fragment>
    <Gutter>{children}</Gutter>
  </Fragment>
);

export default Page;
