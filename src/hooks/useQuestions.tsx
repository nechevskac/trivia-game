import { useState } from 'react';
import { AxiosResponse } from 'axios';

import { ApiResponse } from '../types/api';
import { Difficulty } from '../enums/difficulty';
import { getQuestions } from '../api/trivia';

const useQuestions = () => {
  const [responseData, setResponseData] = useState<ApiResponse>({
    response_code: undefined,
    results: [],
  });

  const [isClicked, setIsClicked] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleResponse = (response: AxiosResponse) => {
    switch (response.data.response_code) {
      case 0:
        setResponseData(response.data);
      case 1:
        setErrorMsg('No Results Could not return results.');
      case 2:
        setErrorMsg('Invalid Parameter.');
    }
  };

  const play = async (difficulty: Difficulty) => {
    try {
      setErrorMsg('');
      setIsClicked(true);
      const response = await getQuestions(difficulty);
      handleResponse(response);
    } catch (err) {
      setErrorMsg('Sorry, something went wrong. Try again later.');
    } finally {
      setIsClicked(false);
    }
  };

  return [responseData, isClicked, errorMsg, play] as const;
};

export default useQuestions;
