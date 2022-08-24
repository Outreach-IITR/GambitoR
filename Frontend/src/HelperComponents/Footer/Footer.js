import React from "react";
import styles from "./Footer.module.css";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import logo from "./assets/footerImg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.mainDiv}>
        <div className={styles.logoDiv}>
          <img className={styles.logo} src={logo} alt="Gambtor Logo" />
          <p className={styles.contactNo}>+91-9999999999</p>
          <p className={styles.emailId}>gambitor@iitr.ac.in</p>
        </div>
        <div className={styles.linkDiv}>
          {/* column 1 */}
          <div className={styles.column}>
            <Link to="/about">ABOUT</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/contacts">CONTACTS</Link>
          </div>

          {/* column 2 */}
          <div className={styles.column}>
            <Link to="/about">SYLLABUS</Link>
            <Link to="/about">MOCK PAPERS</Link>
            <Link to="/about">FAQs</Link>
          </div>

          {/* column 3 */}
          <div className={styles.column}>
            <p>FOLLOW US</p>
            <div className={styles.socailMedia}>
              <a href="/about">
                <img src={fb} alt="facebook" />
              </a>
              <a href="/about">
                <img src={insta} alt="instagram" />
              </a>
              <a href="/about">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/about">
                <img src={yt} alt="youtube" />
              </a>
              <a href="/about">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.TNC}>PRIVACY POLICY | COPYRIGHT | TERMS</p>
    </footer>
  );
}

export default Footer;
