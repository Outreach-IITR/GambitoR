import React from "react";
import styles from "./Footer.module.css";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import linki from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import footerImg from "./assets/footerImg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.leftSection}>
            <img className={styles.footerImg} src={footerImg} alt="" />
            <div className={styles.footPhone}>+91-9558780555</div>
            <div className={styles.footMail}>
              <Link to="mailto: gambitor@iitr.ac.in">gambitor@iitr.ac.in</Link>
            </div>
          </div>

          <div className={styles.Col}>
            <ul>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/events">EVENTS</Link>
              </li>
              <li>
                <Link to="/contacts">CONTACTS</Link>
              </li>
            </ul>
          </div>
          <div className={styles.Col}>
            <ul>
              <li>
                <Link to="#">SYLLABUS</Link>
              </li>
              <li>
                <Link to="#">MOCK PAPERS</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.Col}>
            <ul>
              <li>
                <Link to="#">FOLLOW US</Link>
              </li>
              <li>
                <div className={styles.socialLinks}>
                  <Link to="#">
                    <img alt="" className={styles.socialImg} src={fb} />
                  </Link>
                  <Link to="#">
                    <img alt="" className={styles.socialImg} src={insta}></img>
                  </Link>
                  <Link to="#">
                    <img
                      alt=""
                      className={styles.socialImg}
                      src={twitter}
                    ></img>
                  </Link>
                  <Link to="#">
                    <img alt="" className={styles.socialImg} src={yt}></img>
                  </Link>
                  <Link to="#">
                    <img alt="" className={styles.socialImg} src={linki}></img>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyRight}>
          <br />
          PRIVACY POLICY | COPYRIGHT | TERMS
        </p>
      </footer>
    </div>
  );
}

export default Footer;
