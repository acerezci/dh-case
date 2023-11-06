import React, { ReactNode } from "react";
import { SideMenu } from "../common/components/sideMenu";
import styles from "./index.module.css";
import { Footer, Header } from "../common/components";
import { AnswerKeys } from "../container/answerKeys";

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.bodyContainer}>
      <SideMenu />
      <div className={styles.middleContainer}>
        <Header />
        {children}
        <Footer />
      </div>
      <div className={styles.rightContainer}>
        <AnswerKeys />
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}
