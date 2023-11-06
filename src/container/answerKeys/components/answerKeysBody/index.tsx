import React from "react";
import styles from "./index.module.css";
import { AnswerKeysBodyHeader } from "./components/header";
import { KeyItems } from "./components";

export const AnswerKeysBody = () => {
  return (
    <div className={styles.container}>
      <AnswerKeysBodyHeader />
      <KeyItems />
    </div>
  );
};
