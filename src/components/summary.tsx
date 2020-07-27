import React from 'react';

import { Box, Typography, IconButton } from '@material-ui/core';

import { GoBackIcon } from './icons/icons';
import { UserSummary } from '../types/user-summary';

import SummaryCard from './common/summary-card';

type SummaryProps = {
  userSummary: UserSummary[];
  setEndGameStatus: () => void;
};

const Summary = (props: SummaryProps) => {
  const { userSummary, setEndGameStatus } = props;

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" m="24px 0 24px 0">
        <IconButton onClick={setEndGameStatus}>
          <GoBackIcon />
        </IconButton>
        <Box ml="30px">
          <Typography variant="h3">Summary</Typography>
        </Box>
      </Box>

      <Box display="flex" width="95%" flexDirection="column" alignItems="center" alignSelf="center">
        {userSummary.map((summary) => (
          <SummaryCard key={summary.question} summary={summary} />
        ))}
      </Box>
    </Box>
  );
};

export default Summary;
