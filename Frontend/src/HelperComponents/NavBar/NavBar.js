import React from "react";
import styles from "./NavBar.module.css";
import navLogo from "./assets/navLogo.png";
import topRightImg from "./assets/topRightImg.png";
import topLeftImg from "./assets/topLeftImg.png";
import RegButton from "../RegButton/RegButton";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  return (
    <>
      <div className={styles.mainNav}>
        <img className={styles.leftImg} src={topLeftImg} alt="" />

        <Link to="/">
          <img className={styles.navLogo} alt="img" src={navLogo} />
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link class={styles.rightNavItems} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link class={styles.rightNavItems} to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link class={styles.rightNavItems} to="/contacts">
              Contacts
            </Link>
          </li>
          <li>
            <Link class={styles.rightNavItems} to="#">
              <RegButton />
            </Link>
          </li>
        </ul>
        <img alt="" className={styles.rightImg} src={topRightImg} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
