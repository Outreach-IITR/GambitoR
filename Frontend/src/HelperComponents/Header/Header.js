import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h2 className={styles.text}>{props.headerText}</h2>
        {props.descriptionText && (
          <p className={styles.textDescription}>{props.descriptionText}</p>
        )}
      </div>
    </div>
  );
}

export default Header;
