import { styled } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CheckIcon from '@material-ui/icons/Check';
import StarIcon from '@material-ui/icons/Star';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReplayIcon from '@material-ui/icons/Replay';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import { colorPalette } from '../../global-theme';

export const ArrowIcon = styled(ArrowForwardIosRoundedIcon)({
  fontSize: '1.875rem',
});

export const CorrectAnswer = styled(CheckIcon)({
  color: colorPalette.green,
});

export const GoBackIcon = styled(ArrowBackIcon)({
  color: colorPalette.white,
});

export const IconDown = styled(ThumbDownIcon)({
  color: colorPalette.grey,
  fontSize: '9.375rem',
});

export const IconUp = styled(ThumbUpIcon)({
  color: colorPalette.grey,
  fontSize: '9.375rem',
});

export const PlayAgainIcon = styled(ReplayIcon)({
  transform: 'rotateX(180deg)',
});

export const Star = styled(StarIcon)({
  color: colorPalette.yellow,
  fontSize: '2.25rem',
});

export const UserCorrectAnswer = styled(SentimentVerySatisfiedIcon)({
  color: colorPalette.green,
});

export const UserIncorrectAnswer = styled(SentimentVeryDissatisfiedIcon)({
  color: colorPalette.red,
});
