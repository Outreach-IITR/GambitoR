//Dependencies Import
import React from "react";

//Stylesheet Imports
import style from "./Hamburger.module.css";

//Image Imports

const Hamburger = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${style.hamburger__ham} ${
        props.isOpen ? style.ham_active : ""
      }`}
    >
      <div
        className={`${style.hamburger__burger} ${style.hamburger__burger1}`}
      ></div>
      <div
        className={`${style.hamburger__burger} ${style.hamburger__burger2}`}
      ></div>
      <div
        className={`${style.hamburger__burger} ${style.hamburger__burger3}`}
      ></div>
    </div>
  );
};

export default Hamburger;
