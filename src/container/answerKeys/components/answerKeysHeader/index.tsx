import React from "react";
import styles from "./index.module.css";
import { ReactComponent as TurnOff } from "../../../../common/svg/turn-off.svg";

export const AnswerKeysHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.endTest}>
        <TurnOff /> Testi Bitir
      </div>
    </div>
  );
};
