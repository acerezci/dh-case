import React from "react";
import styles from "./index.module.css";
import { AnswerType } from "../../../../../../../../model";
import classNames from "classnames";
import { useAppContext } from "../../../../../../../../context";

export const KeyItem = (props: Props) => {
  const { index } = props;
  const { answeredQuestions } = useAppContext();

  const renderOptions = () => {
    const options: AnswerType[] = ["A", "B", "C", "D", "E"];

    return options.map((o) => (
      <div
        className={classNames(
          styles.option,
          answeredQuestions[index]?.currentAnswer === o && styles.active
        )}
        key={o}
      >
        {o}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>{index + 1}. Soru</div>
      <div className={styles.options}>{renderOptions()}</div>
    </div>
  );
};

interface Props {
  index: number;
  correctAnswer: AnswerType;
}
