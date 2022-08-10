import React from "react";
import styles from "./Navbar.module.css";
import navLogo from "./assets/navLogo.png";
import topRightImg from "./assets/topRightImg.png";
import topLeftImg from "./assets/topLeftImg.png";

import RegButton from "../../Components/RegButton/RegButton";

function Navbar() {
  return (
    <div className={styles.mainNav}>
      <img className={styles.leftImg} src={topLeftImg} />

      <img className={styles.navLogo} alt="img" src={navLogo} />
      <ul className={styles.navList}>
        <li>
          <a class={styles.rightNavItems} href="#">
            About
          </a>
        </li>
        <li>
          <a class={styles.rightNavItems} href="#">
            Events
          </a>
        </li>
        <li>
          <a class={styles.rightNavItems} href="#">
            Contacts
          </a>
        </li>
        <li>
          <a class={styles.rightNavItems} href="#">
            <RegButton />
          </a>
        </li>
      </ul>
      <img className={styles.rightImg} src={topRightImg}></img>
    </div>
  );
}

export default Navbar;
