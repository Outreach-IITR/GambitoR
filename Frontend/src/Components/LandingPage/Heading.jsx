import React from "react";
import RegButton from "../RegButton/RegButton";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cursus
          non neque tellus sagittis nam orci enim. Ac suspendisse aliquam
          pulvinar vulputate sagittis auctor et morbi sollicitudin.
        </p>
        <RegButton />
      </div>
      <div className={style.headingImage}>
        <img src={headingImage} alt="" />
      </div>
    </div>
  );
};

export default Heading;
