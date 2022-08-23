import React from "react";
import styles from "./NavBar.module.css";
import RegButton from "../RegButton/RegButton";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setisOpen] = useState(0);
  const onClickHandler = () => {
    console.log(isOpen);
    setisOpen((prevState) => !prevState);
  };
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.rightNavItems} to="/register">
            <RegButton />
          </Link>
        </li>
        <li>
          <Hamburger onClick={onClickHandler} />
        </li>
      </ul>
      <ul className={`${styles.mobileNav} ${isOpen ? styles.isActive : ""}`}>
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
