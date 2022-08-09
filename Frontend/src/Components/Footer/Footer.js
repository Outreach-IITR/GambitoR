import React from 'react';
import styles from "./Footer.module.css";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import yt from "./assets/youtube.png";
import linki from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import footerImg from "./assets/footerImg.png";

function Footer() {
  return (
    <div>
      <footer className={styles.mainFooter}>
        <div className={styles.footerContainer}>
            <div className={styles.leftSection}>
                <img className={styles.footerImg} src={footerImg} />
                <div className={styles.footPhone}>+91-999999999</div>
                <div className={styles.footMail}>gambitor@iitr.ac.in</div>
            </div>
            <div className={styles.row}>
                <div className={styles.firstCol}>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">EVENTS</a></li>
                        <li><a href="#">CONTACTS</a></li>
                    </ul>
                </div>
                <div className={styles.secondCol}>
                    <ul>
                        <li><a href="#">RESOURCES</a></li>
                        <li><a href="#">SYLLABUS</a></li>
                        <li><a href="#">MOCK PAPERS</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className={styles.thirdCol}>
                    <ul>
                        <li><a href="#">FOLLOW US</a></li>
                        <li>
                        <div className={styles.socialLinks}>
                            <a href="#"><img className={styles.socialImg} src={fb} /></a>
                            <a href="#"><img className={styles.socialImg} src={insta}></img></a>
                            <a href="#"><img className={styles.socialImg} src={twitter}></img></a>
                            <a href="#"><img className={styles.socialImg} src={yt}></img></a>
                            <a href="#"><img className={styles.socialImg} src={linki}></img></a>
                        </div>
                        </li>
                    </ul>    
                </div>
            </div>
            
        </div>
        <p className={styles.copyRight}>
              <br />
              PRIVACY POLICY | COPYRIGHT | TERMS
            </p>
            
      </footer>
    </div>
  )
}

export default Footer
