import React from "react";
import styles from "./index.module.css";
import { useQuestion } from "../../../../hooks/useQuestion";
import { QuestionIcons } from "../questionIcons";

export const QuestionHeader = () => {
  const { currentQuestion } = useQuestion();

  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        Soru: {currentQuestion?.lesson} #{currentQuestion?.id || 0 + 1}
      </div>
      <QuestionIcons />
    </div>
  );
};
