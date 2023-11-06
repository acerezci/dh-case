import { useState } from "react";
import { IQuestion } from "../../model";
import { questions } from "../../mock/data";

export const useQuestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>();

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    if (questions?.[nextIndex + 1]) {
      setCurrentQuestion(questions[nextIndex + 1]);

      return;
    }

    setCurrentQuestion(questions[0]);
  };

  return {
    currentQuestion,
    nextQuestion,
  };
};
