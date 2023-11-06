import React, { ReactNode } from "react";
import { SideMenu } from "../common/components/sideMenu";
import styles from "./index.module.css";
import { Header } from "../common/components";

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.bodyContainer}>
      <SideMenu />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}
