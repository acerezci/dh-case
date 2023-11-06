import React, { memo } from "react";
import styles from "./index.module.css";
import { Button } from "../button";
import { useAppContext } from "../../../context";

export const Footer = memo(() => {
  const { nextQuestion, prevQuestion } = useAppContext();

  const handlePrevQuestion = () => {
    prevQuestion();
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  return (
    <div className={styles.container}>
      <Button onClick={handlePrevQuestion} title="Önceki Soru" type="PREV" />
      <Button onClick={handleNextQuestion} title="Sonraki Soru" type="NEXT" />
    </div>
  );
});
