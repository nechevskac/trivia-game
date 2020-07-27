import React from 'react';

import { Box, Typography, styled } from '@material-ui/core';

import { colorPalette } from '../../global-theme';
import { UserSummary } from '../../types/user-summary';
import { CorrectAnswer, UserCorrectAnswer, UserIncorrectAnswer } from '../icons/icons';

const Card = styled(Box)({
  backgroundColor: colorPalette.purpleDark,
  padding: '25px',
  borderRadius: '35px',
  lineHeight: 1.3,
  width: '100%',
  margin: '3px',
});

type SummaryCardProps = {
  summary: UserSummary;
};

const SummaryCard = (props: SummaryCardProps) => {
  const { question, correctAnswer, userAnswer } = props.summary;

  return (
    <Card key={question}>
      <Typography variant="body1">{question}</Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <CorrectAnswer />
        <Box ml={2}>
          <Typography variant="body1"> {correctAnswer}</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        {correctAnswer === userAnswer ? <UserCorrectAnswer /> : <UserIncorrectAnswer />}{' '}
        <Box ml={2}>
          <Typography variant="body1">{userAnswer}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SummaryCard;
