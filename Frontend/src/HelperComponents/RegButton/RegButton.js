import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegButton.module.css";

function RegButton(props) {
  return (
    <Link to={props.to}>
      <button className={styles.button1}>Register</button>
    </Link>
  );
}

export default RegButton;
