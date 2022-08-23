import React from "react";

import style from "./Syllabus.module.css";

import leftImg from "./Assets/LeftImg.png";
import rightImg from "./Assets/RightImg.png";

const syllabusDetails = [
  {
    id: 1,
    name: "Metiox",
    content: " Aptitude & logical reasoning",
  },
  {
    id: 2,
    name: "Apollox",
    content: "Aptitude & logical reasoning, general Mathematics",
  },
  {
    id: 1,
    name: "Athenox",
    content:
      "Aptitude & logical reasoning, complete 11th Physics,Chemistry & Mathematics portion.",
  },
];

const Syllabus = () => {
  return (
    <div className={style.syllabusContainer}>
      <img className={style.leftImg} src={leftImg} alt="" />
      <h1 className={style.headingTitle}>SYLLABUS</h1>
      <div className={style.syllabusDetails}>
        {syllabusDetails.map((obj, idx) => {
          return (
            <div key={idx} className={style.categoryDiv}>
              <div className={style.categoryName}>{obj.name}</div>
              <p className={style.categoryContent}>{obj.content}</p>
            </div>
          );
        })}
      </div>
      <img className={style.rightImg} src={rightImg} alt="" />
    </div>
  );
};

export default Syllabus;
