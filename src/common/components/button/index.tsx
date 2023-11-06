import React from "react";
import styles from "./index.module.css";
import { ReactComponent as PrevQuestion } from "../../svg/left-chevron.svg";
import { ReactComponent as NextQuestion } from "../../svg/right-chevron.svg";

export const Button = (props: Props) => {
  const { title, onClick, type } = props;

  const renderIcon = () => {
    if (type === "NEXT") {
      return (
        <>
          {title}
          <NextQuestion />
        </>
      );
    }

    return (
      <>
        <PrevQuestion /> {title}
      </>
    );
  };

  return (
    <div className={styles.container} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

interface Props {
  title: string;
  onClick: () => void;
  type: "NEXT" | "PREV";
}
