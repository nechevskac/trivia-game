import React, { useEffect, useState } from 'react';

import { ApiQuestion } from '../types/api';
import { UserSummary } from '../types/user-summary';

import Answer from './answer';
import Question from './question';
import Score from './score';

type GameStateProps = {
  questions: ApiQuestion[];
  userSummary: UserSummary[];
};

const GameState = (props: GameStateProps) => {
  const { questions, userSummary } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [userAnswer, setUserAnswer] = useState('');

  const isAnswerCorrect = userAnswer === questions[currentQuestion].correct_answer;

  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (userAnswer !== '') {
      userSummary.push({
        question: questions[currentQuestion].question,
        userAnswer: userAnswer,
        correctAnswer: questions[currentQuestion].correct_answer,
      });
    }
  }, [userAnswer, showScore]);

  const nextQuestion = () => {
    setUserAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <Score correctAnswers={currentQuestion + 1} userSummary={userSummary} />
      ) : userAnswer !== '' ? (
        <Answer
          isAnswerCorrect={isAnswerCorrect}
          correctAnswers={currentQuestion}
          nextQuestion={nextQuestion}
          userSummary={userSummary}
        />
      ) : (
        <Question currentQuestion={questions[currentQuestion]} setUserAnswer={setUserAnswer} />
      )}
    </>
  );
};

export default GameState;
