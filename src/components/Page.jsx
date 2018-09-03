import React, { Fragment } from 'react';
import styled from 'styled-components';

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1015px;
`;

const Page = ({ children }) => (
  <Fragment>
    <Gutter>{children}</Gutter>
  </Fragment>
);

export default Page;
