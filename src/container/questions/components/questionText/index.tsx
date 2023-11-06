import React from "react";
import styles from "./index.module.css";
import { useAppContext } from "../../../../context";

export const QuestionText = () => {
  const { currentQuestion } = useAppContext();

  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{ __html: currentQuestion?.question || "" }}
        className={styles.questionText}
      ></div>
    </div>
  );
};
