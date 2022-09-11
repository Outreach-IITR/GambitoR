import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.Navbar}>
        <h1 className={styles.title}>Dashboard</h1>
        <h1 className={styles.logo}>GambitoR</h1>
      </nav>
    </div>
  );
};

export default Navbar;
