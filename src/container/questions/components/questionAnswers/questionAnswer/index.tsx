import React from "react";
import styles from "./index.module.css";
import { AnswerType } from "../../../../../model";
import { ReactComponent as Circle } from "../../../../../common/svg/circle.svg";
import { ReactComponent as ActiveCircle } from "../../../../../common/svg/active-circle.svg";
import { AnswerButton } from "../answerButton";
import classNames from "classnames";
import { useAppContext } from "../../../../../context";

export const QuestionAnswer = (props: Props) => {
  const { optionName, text } = props;
  const {
    currentIndex,
    currentQuestion,
    setAnsweredQuestions,
    answeredQuestions,
    finishedTest,
  } = useAppContext();
  const answeredQuestion = answeredQuestions[currentIndex];
  const isActive = answeredQuestion?.currentAnswer === optionName;

  const handleAnswer = () => {
    if (!finishedTest) {
      const _answeredQuestions = [...answeredQuestions];

      const filteredAnsweredQuestionIndex = _answeredQuestions.findIndex(
        (q) => q.id === currentQuestion.id
      );

      if (filteredAnsweredQuestionIndex > -1) {
        _answeredQuestions[filteredAnsweredQuestionIndex] = {
          ...currentQuestion,
          currentAnswer: optionName,
        };
      } else {
        _answeredQuestions.push({
          ...currentQuestion,
          currentAnswer: optionName,
        });
      }

      setAnsweredQuestions(_answeredQuestions);
    }
  };

  return (
    <div
      className={classNames(
        styles.container,
        isActive && styles.active,
        finishedTest && styles.disabled,
        finishedTest
          ? answeredQuestion.correctAnswer === optionName &&
              styles.correctAnswer
          : "",
        finishedTest
          ? answeredQuestion.currentAnswer === optionName && styles.wrongAnswer
          : ""
      )}
      onClick={handleAnswer}
    >
      <div className={styles.leftContainer}>
        <div className={styles.optionName}>
          {isActive ? <ActiveCircle /> : <Circle />}
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
}
