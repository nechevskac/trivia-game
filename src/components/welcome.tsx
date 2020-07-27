import React from 'react';

import useQuestions from '../hooks/useQuestions';

import { UserSummary } from '../types/user-summary';

import GameStart from './game-start';
import GameState from './game-state';
import SnackbarContent from './snackbar-content';

const Welcome = () => {
  const [responseData, isClicked, errorMsg, play] = useQuestions();

  const userSummary: UserSummary[] = [];

  return (
    <>
      {responseData.response_code === 0 ? (
        <GameState questions={responseData.results} userSummary={userSummary} />
      ) : (
        <>
          <GameStart isClicked={isClicked} startGame={play} />
          {errorMsg !== '' && <SnackbarContent message={errorMsg} />}
        </>
      )}
    </>
  );
};

export default Welcome;
