import React from 'react';

import { Box, styled } from '@material-ui/core';

import { colorPalette } from './global-theme';

const Root = styled(Box)({
  padding: '30px 30px 30px 30px',
  backgroundColor: colorPalette.purple,
  overflow: 'auto',
  minHeight: '100vh',
});

type RootWrapperProps = {
  children: object;
};

const RootWrapper = (props: RootWrapperProps) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

export default RootWrapper;
