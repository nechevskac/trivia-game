import React, { useState } from 'react';

import { Snackbar } from '@material-ui/core';

import { DELAY } from '../constants';

type SnackbarContentProps = {
  message: string;
};

const SnackbarContent = (props: SnackbarContentProps) => {
  const { message } = props;

  const [showSnackbar, setShowSnackbar] = useState(true);

  return (
    <Snackbar open={showSnackbar} autoHideDuration={DELAY} onClose={() => setShowSnackbar(false)} message={message} />
  );
};

export default SnackbarContent;
