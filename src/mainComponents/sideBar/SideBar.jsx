import styles from "./sidebar.module.css";

import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <nav className={styles.navbar}>
      <li className={styles.list}>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </li>
      <li className={styles.list}>
        <Link className={styles.link} to="/components">
          {" "}
          Components{" "}
        </Link>
      </li>
      <li className={styles.list}>
        <a
          className={styles.link}
          href="https://github.com/dushyant2901/TailyUI"
          target="_blank"
        >
          Github
        </a>
      </li>
    </nav>
  );
};
