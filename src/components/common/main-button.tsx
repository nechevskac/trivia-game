import React from 'react';

import { Button as _Button, styled } from '@material-ui/core';

import { colorPalette } from '../../global-theme';

const Button = styled(_Button)({
  boxShadow:
    '0px 12px ' + colorPalette.pinkDark + ', 0px 0px ' + colorPalette.pinkDark + ', -1px 1px ' + colorPalette.pinkDark,
});

type MainButtonProps = {
  label: string;
  action: () => void;
  icon?: any;
};

const MainButton = (props: MainButtonProps) => {
  const { label, action, icon } = props;

  return (
    <Button variant="contained" color="secondary" endIcon={icon} onClick={action}>
      {label}
    </Button>
  );
};

export default MainButton;
