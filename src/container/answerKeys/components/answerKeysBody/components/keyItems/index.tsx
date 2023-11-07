import React from "react";
import styles from "./index.module.css";
import { useAppContext } from "../../../../../../context";
import { KeyItem } from "./components/keyItem";
import { questions } from "../../../../../../mock/data";

export const KeyItems = () => {
  const { questionsCount } = useAppContext();

  return (
    <div className={styles.container}>
      {[...new Array(questionsCount)].map((_v, i) => (
        <KeyItem key={i} correctAnswer={questions[i].correctAnswer} index={i} />
      ))}
    </div>
  );
};
