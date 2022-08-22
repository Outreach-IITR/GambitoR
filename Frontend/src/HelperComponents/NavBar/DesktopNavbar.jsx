import React from "react";
import styles from "./NavBar.module.css";
import RegButton from "../RegButton/RegButton";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.rightNavItems} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.rightNavItems} to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className={styles.rightNavItems} to="/contacts">
            Contacts
          </Link>
        </li>
        <li>
          <Link className={styles.rightNavItems} to="/register">
            <RegButton />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavbar;
