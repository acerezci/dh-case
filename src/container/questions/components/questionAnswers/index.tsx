import React, { useState } from "react";
import styles from "./index.module.css";
import { QuestionAnswer } from "./questionAnswer";
import { AnswerType } from "../../../../model";
import { useAppContext } from "../../../../context";

export const QuestionAnswers = () => {
  const { currentQuestion } = useAppContext();
  const [currentAnswer, setCurrentAnswer] = useState<AnswerType | null>(null);

  return (
    <div className={styles.container}>
      {currentQuestion.answers.map((a) => (
        <QuestionAnswer
          currentAnswer={currentAnswer}
          setCurrentAnswer={setCurrentAnswer}
          optionName={a.optionName}
          text={a.text}
          key={a.optionName}
        />
      ))}
    </div>
  );
};
