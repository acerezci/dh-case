import React from "react";
import styles from "./index.module.css";
import { ReactComponent as TurnOff } from "../../../../common/svg/turn-off.svg";
import { useAppContext } from "../../../../context";

export const AnswerKeysHeader = () => {
  const { setFinishedTest } = useAppContext();

  const handleFinishTest = () => {
    setFinishedTest(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.endTest} onClick={handleFinishTest}>
        <TurnOff /> Testi Bitir
      </div>
    </div>
  );
};
