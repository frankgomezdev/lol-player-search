import React from "react";
import SideBar from "../sideBar/Sidebar";
import styles from "./Layout.module.css";
import Toast from "../Toast/Toast";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <SideBar />
        {}
        {children}
      </div>
    </div>
  );
};
export default Layout;
