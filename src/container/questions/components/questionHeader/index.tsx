import React from "react";
import styles from "./index.module.css";
import { QuestionIcons } from "../questionIcons";
import { useAppContext } from "../../../../context";

export const QuestionHeader = () => {
  const { currentQuestion } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        Soru: {currentQuestion?.lesson} #{currentQuestion?.id || 0 + 1}
      </div>
      <QuestionIcons />
    </div>
  );
};
