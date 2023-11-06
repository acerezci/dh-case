import React from "react";
import styles from "./index.module.css";
import { QuestionHeader } from "../questionHeader";

export const Question = () => {
  return (
    <div className={styles.container}>
      <QuestionHeader />
    </div>
  );
};

// interface Props {
//   lesson: string;
//   answers: IAnswers[];
//   correctAnswer: AnswerType;
//   id: number;
//   question: string;
//   index: number;
// }
