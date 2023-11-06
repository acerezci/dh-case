import React from "react";
import styles from "./index.module.css";
import { AnswerType } from "../../../../../model";
import { ReactComponent as Circle } from "../../../../../common/svg/circle.svg";
import { ReactComponent as ActiveCircle } from "../../../../../common/svg/active-circle.svg";
import { AnswerButton } from "../answerButton";
import classNames from "classnames";

export const QuestionAnswer = (props: Props) => {
  const { optionName, text, currentAnswer, setCurrentAnswer } = props;

  const handleAnswer = () => {
    setCurrentAnswer(optionName);
  };

  return (
    <div
      className={classNames(
        styles.container,
        currentAnswer === optionName && styles.active
      )}
      onClick={handleAnswer}
    >
      <div className={styles.leftContainer}>
        <div className={styles.optionName}>
          {currentAnswer === optionName ? <ActiveCircle /> : <Circle />}{" "}
          {optionName}-)
        </div>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>

      <AnswerButton className={styles.answerButton} />
    </div>
  );
};

interface Props {
  optionName: AnswerType;
  text: string;
  currentAnswer: AnswerType | null;
  setCurrentAnswer: (e: AnswerType) => void;
}
