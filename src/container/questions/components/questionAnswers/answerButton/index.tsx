import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const AnswerButton = (props: Props) => {
  const { className } = props;

  return <div className={classNames(styles.container, className)}>Cevapla</div>;
};

interface Props {
  className: string;
}
