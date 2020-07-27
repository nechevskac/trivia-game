import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { ApiQuestion } from '../types/api';

import Option from './common/option';

type QuestionProps = {
  currentQuestion: ApiQuestion;
  setUserAnswer: (args: string) => void;
};

const Question = (props: QuestionProps) => {
  const { currentQuestion, setUserAnswer } = props;

  const getAllAnswers = () => {
    const allAnswers: string[] = [];
    allAnswers.push(currentQuestion.correct_answer);
    currentQuestion.incorrect_answers.forEach((answer: string) => {
      allAnswers.push(answer);
    });
    return allAnswers.sort();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box textAlign="center" width="110%" pt={4} pb={6}>
        <Typography variant="h3">{currentQuestion.question}</Typography>
      </Box>
      <Box height="280px" display="flex" flexDirection="column" justifyContent="space-between">
        {getAllAnswers().map((answer) => (
          <Option key={answer} optionValue={answer} setSelectedOption={setUserAnswer} />
        ))}
      </Box>
    </Box>
  );
};

export default Question;
