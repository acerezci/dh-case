import React from "react";
import styles from "./index.module.css";
import { AnswerKeysHeader } from "./components/answerKeysHeader";
import { AnswerKeysBody } from "./components";

export const AnswerKeys = () => {
  return (
    <div className={styles.contaner}>
      <AnswerKeysHeader />
      <AnswerKeysBody />
    </div>
  );
};
