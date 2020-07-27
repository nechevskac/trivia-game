export type ApiQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type ApiResponse = {
  response_code?: number;
  results: ApiQuestion[];
};
