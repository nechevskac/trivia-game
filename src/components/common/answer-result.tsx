import React from 'react';

import { Box, styled } from '@material-ui/core';

import { colorPalette } from '../../global-theme';

const Result = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '275px',
  height: '275px',
  backgroundColor: colorPalette.purpleDark,
  borderRadius: '145px',
  justifyContent: 'center',
  marginTop: '50px',
});

type AnswerResultProps = {
  children: object;
};

const AnswerResult = (props: AnswerResultProps) => {
  const { children } = props;

  return (
    <Result>
      {children}
    </Result> 
  );
};

export default AnswerResult;