import React from "react";
import RegButton from "../../HelperComponents/RegButton/RegButton";

import style from "./Heading.module.css";

import headingImage from "./Assets/HeadingImage.png";

const Heading = () => {
  return (
    <div className={style.headingContainer}>
      <div className={style.content}>
        <h1 className={style.headingTitle}>
          GAMBITO<span>R</span>
        </h1>
        <p className={style.description}>
          A nationwide exam designed for the students of classes 9th to 12th, to
          challenge thier mental abilities and make their brainpower reach
          pinnacle.
        </p>
        <RegButton to="/register" />
      </div>
      <div className={style.headingImage}>
        <img src={headingImage} alt="" />
      </div>
    </div>
  );
};

export default Heading;
