import React from "react";
import styles from "./index.module.css";
import { QuestionAnswer } from "./questionAnswer";
import { useAppContext } from "../../../../context";

export const QuestionAnswers = () => {
  const { currentQuestion } = useAppContext();

  return (
    <div className={styles.container}>
      {currentQuestion.answers.map((a) => (
        <QuestionAnswer
          optionName={a.optionName}
          text={a.text}
          key={a.optionName}
        />
      ))}
    </div>
  );
};
