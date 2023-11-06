import React from "react";
import styles from "./index.module.css";
import { QuestionHeader } from "../questionHeader";
import { QuestionText } from "../questionText";
import { QuestionAnswers } from "../questionAnswers";

export const Question = () => {
  return (
    <div className={styles.container}>
      <QuestionHeader />
      <QuestionText />
      <QuestionAnswers />
    </div>
  );
};
