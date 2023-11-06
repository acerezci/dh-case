import React from "react";
import { useAppContext } from "../../../../../../context";
import { ReactComponent as Lesson } from "../../../../../../common/svg/lesson.svg";
import styles from "./index.module.css";

export const AnswerKeysBodyHeader = () => {
  const { currentQuestion, questionsCount } = useAppContext();

  return (
    <div className={styles.container}>
      <Lesson />
      <div className={styles.lesson}>
        {currentQuestion.lesson}
        <span>{questionsCount || 0} Soru</span>
      </div>
    </div>
  );
};
