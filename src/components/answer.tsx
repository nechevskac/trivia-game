import React, { useState } from 'react';

import { DELAY } from '../constants';
import { ArrowIcon, IconDown, IconUp } from './icons/icons';
import { UserSummary } from '../types/user-summary';

import AnswerResult from './common/answer-result';
import AnswerScreen from './common/answer-screen';
import MainButton from './common/main-button';

import Score from './score';

type AnswerProps = {
  isAnswerCorrect: boolean;
  nextQuestion: () => void;
  correctAnswers: number;
  userSummary: UserSummary[];
};

const Answer = (props: AnswerProps) => {
  const { isAnswerCorrect, nextQuestion, correctAnswers, userSummary } = props;

  const [showScore, setShowScore] = useState(false);

  const timer = () => {
    window.setTimeout(() => setShowScore(true), DELAY);
  };

  !isAnswerCorrect && timer();

  return (
    <>
      {isAnswerCorrect ? (
        <AnswerScreen>
          <AnswerResult>
            <IconUp />
          </AnswerResult>
          <MainButton label="Next" icon={<ArrowIcon />} action={nextQuestion} />
        </AnswerScreen>
      ) : (
        <>
          {showScore ? (
            <Score correctAnswers={correctAnswers} userSummary={userSummary} />
          ) : (
            <AnswerScreen>
              <AnswerResult>
                <IconDown />
              </AnswerResult>
            </AnswerScreen>
          )}
        </>
      )}
    </>
  );
};

export default Answer;
