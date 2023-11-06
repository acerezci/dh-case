import React, { memo } from "react";
import styles from "./index.module.css";
import { ReactComponent as LeftArrow } from "../../svg/left-arrow.svg";

export const Header = memo(() => {
  return (
    <div className={styles.container}>
      <LeftArrow />
      <p className={styles.testText}>Konu Tarama Testi #1</p>
    </div>
  );
});
