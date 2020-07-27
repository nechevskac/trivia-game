import axios from 'axios';

import { Difficulty } from '../enums/difficulty';

const BASE_URL = 'https://opentdb.com/api.php';
const ANSWER_TYPE = 'multiple';
const NUMBER_OF_QUESTIONS = 5;

export const getQuestions = (difficulty: Difficulty) => {
  return axios.get(BASE_URL, {
    params: {
      amount: NUMBER_OF_QUESTIONS,
      type: ANSWER_TYPE,
      difficulty: difficulty,
    },
  });
};
