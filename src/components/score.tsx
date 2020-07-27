import React, { useState } from 'react';

import { Button, Typography } from '@material-ui/core';

import { EndGameState } from '../enums/end-game-state';
import { PlayAgainIcon } from './icons/icons';
import { UserSummary } from '../types/user-summary';

import AnswerResult from './common/answer-result';
import AnswerScreen from './common/answer-screen';
import MainButton from './common/main-button';

import Summary from './summary';
import Welcome from './welcome';

type ScoreProps = {
  correctAnswers: number;
  userSummary: UserSummary[];
};

const Score = (props: ScoreProps) => {
  const { correctAnswers, userSummary } = props;

  const [endGameState, setEndGameState] = useState(EndGameState.SCORE);

  const getEndGameState = () => {
    switch (endGameState) {
      case EndGameState.PLAY_AGAIN:
        return <Welcome />;
      case EndGameState.SHOW_SUMMARY:
        return <Summary userSummary={userSummary} setEndGameStatus={() => setEndGameState(EndGameState.SCORE)} />;
      default:
        return (
          <AnswerScreen>
            <AnswerResult>
              <Typography variant="h1">{correctAnswers}</Typography>
            </AnswerResult>
            <Button onClick={() => setEndGameState(EndGameState.SHOW_SUMMARY)}>
              <Typography variant="body2">show summary</Typography>
            </Button>
            <MainButton
              label="Again"
              icon={<PlayAgainIcon />}
              action={() => setEndGameState(EndGameState.PLAY_AGAIN)}
            />
          </AnswerScreen>
        );
    }
  };

  return <>{getEndGameState()}</>;
};

export default Score;
