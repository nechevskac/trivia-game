import React from 'react';

import { Box } from '@material-ui/core';

type AnswerScreenProps = {
  children: object;
};

const AnswerScreen = (props: AnswerScreenProps) => {
  const { children } = props;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="500px" justifyContent="space-between">
      {children}
    </Box>
  );
};

export default AnswerScreen;
