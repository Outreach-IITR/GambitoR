import React from "react";
import styles from "./NavBar.module.css";
import navLogo from "./assets/navLogo.png";
import topRightImg from "./assets/topRightImg.png";
import topLeftImg from "./assets/topLeftImg.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavBar";

const Navbar = () => {
  return (
    <>
      <div className={styles.mainNav}>
        <img className={styles.leftImg} src={topLeftImg} alt="" />

        <Link className={styles.navLogo} to="/">
          <img alt="img" src={navLogo} />
        </Link>
        {window.innerWidth > 756 ? <DesktopNavbar /> : <MobileNavbar />}

        <div className={styles.rightImg}>
          <img alt="" src={topRightImg} />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
