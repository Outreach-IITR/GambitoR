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
          <a href="Tel: 91-9558780555" className={styles.contactNo}>
            +91-9558780555
          </a>
          <a href="mailto: gambitor@iitr.ac.in" className={styles.emailId}>
            gambitor@iitr.ac.in
          </a>
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
            <Link to="/about">FOLLOW US</Link>
            <div className={styles.socailMedia}>
              <a href="https://www.facebook.com/Outreach-Cell-IIT-Roorkee-102873668810173" target={'_blank'}>
                <img src={fb} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/outreachiitr/" target={'_blank'}>
                <img src={insta} alt="instagram" />
              </a>
              {/* <a href="/about">
                <img src={twitter} alt="twitter" />
              </a> */}
              <a href="https://in.linkedin.com/company/outreach-cell-iit-roorkee" target={'_blank'}>
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
