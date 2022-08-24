import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setisOpen] = useState(1);
  const onClickHandler = () => {
    setisOpen((prevState) => !prevState);
  };

  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.rightNavItems} to="/register">
            <button className={styles.button1}>Register</button>
          </Link>
        </li>
        <li>
          <Hamburger onClick={onClickHandler} />
        </li>
      </ul>
      <div
        className={`${styles.backdropDiv} ${isOpen ? styles.isActive : ""}`}
        onClick={() => setisOpen(1)}
      />
      <ul
        className={`${styles.mobileNav} ${isOpen ? styles.isActive : ""}`}
        onClick={() => setisOpen(1)}
      >
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.rightNavItems} ${isActive ? styles.currentPage : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${styles.rightNavItems} ${isActive ? styles.currentPage : ""}`
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${styles.rightNavItems} ${isActive ? styles.currentPage : ""}`
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MobileNavbar;
