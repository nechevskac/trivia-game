import React, { useState } from 'react';

import { Box, Typography } from '@material-ui/core';

import { Difficulty } from '../enums/difficulty';

import MainButton from './common/main-button';
import Option from './common/option';

type GameStartProps = {
  isClicked: boolean;
  startGame: (args: Difficulty) => void;
};

const GameStart = (props: GameStartProps) => {
  const { isClicked, startGame } = props;

  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulty.EASY);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2">TriviaTime</Typography>
      <Box textAlign="center" width="65%" pt={3} pb={2}>
        <Typography variant="h3">Pick your level of difficulty</Typography>
      </Box>
      <Box
        height="280px"
        width="100%"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {Object.values(Difficulty).map((difficultyOption) => (
          <Option
            key={difficultyOption}
            optionValue={difficultyOption}
            selectedOption={selectedDifficulty}
            setSelectedOption={setSelectedDifficulty}
          />
        ))}
        <MainButton label="Play Now" action={() => !isClicked && startGame(selectedDifficulty)} />
      </Box>
    </Box>
  );
};

export default GameStart;
