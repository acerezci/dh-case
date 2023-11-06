import React, { memo } from "react";
import styles from "./index.module.css";
import { ReactComponent as Brush } from "../../../../common/svg/brush.svg";
import { ReactComponent as ZoomIn } from "../../../../common/svg/zoom-in.svg";
import { ReactComponent as ZoomOut } from "../../../../common/svg/zoom-out.svg";
import { ReactComponent as Alert } from "../../../../common/svg/alert.svg";

export const QuestionIcons = memo(() => {
  return (
    <div className={styles.container}>
      <Brush />
      <ZoomIn />
      <ZoomOut />
      <Alert />
    </div>
  );
});
