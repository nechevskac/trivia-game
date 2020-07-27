import React from 'react';

import { Button as _Button, styled } from '@material-ui/core';

import { colorPalette } from '../../global-theme';
import { Difficulty } from '../../enums/difficulty';
import { Star } from '../icons/icons';
import { TEXT_LABEL } from '../../constants';

const Button = styled(_Button)({
  backgroundColor: colorPalette.purpleDark,
  '&:hover': {
    backgroundColor: colorPalette.purpleDark,
  },
});

type OptionProps = {
  optionValue: Difficulty | string;
  selectedOption?: Difficulty;
  setSelectedOption: (args: any) => void;
};

const Option = (props: OptionProps) => {
  const { optionValue, selectedOption, setSelectedOption } = props;

  const getButtonLabel = () => {
    switch (optionValue) {
      case Difficulty.EASY:
        return TEXT_LABEL[Difficulty.EASY];
      case Difficulty.MEDIUM:
        return TEXT_LABEL[Difficulty.MEDIUM];
      case Difficulty.HARD:
        return TEXT_LABEL[Difficulty.HARD];
    }
  };

  return (
    <Button variant="contained" onClick={() => setSelectedOption(optionValue)}>
      {selectedOption === optionValue && <Star />}
      {selectedOption ? getButtonLabel() : optionValue}
    </Button>
  );
};

export default Option;
