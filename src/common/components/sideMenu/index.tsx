import React, { memo } from "react";
import styles from "./index.module.css";
import { ReactComponent as DHLogo } from "../../svg/dh-1.svg";
import { ReactComponent as CategoriesLogo } from "../../svg/categories.svg";
import { ReactComponent as LibrariesLogo } from "../../svg/libraries.svg";
import { ReactComponent as App1Logo } from "../../svg/app-1.svg";
import { ReactComponent as App2Logo } from "../../svg/app-2.svg";
import { ReactComponent as App3Logo } from "../../svg/app-3.svg";
import { ReactComponent as ChartsLogo } from "../../svg/charts.svg";
import { ReactComponent as ConfirmationsLogo } from "../../svg/confirmations.svg";
import { ReactComponent as DHLiveLogo } from "../../svg/dh-live.svg";
import { ReactComponent as MessagesLogo } from "../../svg/messages.svg";
import { ReactComponent as PointsLogo } from "../../svg/points.svg";
import { ReactComponent as QuestionsLogo } from "../../svg/questions.svg";

export const SideMenu = memo(() => {
  return (
    <div className={styles.container}>
      <div>
        <DHLogo />
      </div>
      <div>
        <CategoriesLogo />
        <LibrariesLogo />
        <QuestionsLogo className={styles.active} />
        <ConfirmationsLogo />
        <PointsLogo />
        <ChartsLogo />
        <DHLiveLogo />
      </div>

      <div>
        <App1Logo />
        <App2Logo />
        <App3Logo />
      </div>
      <div>
        <MessagesLogo />
      </div>
    </div>
  );
});
