import React from "react";
import { useState } from "react";

import categoryIcon from "./Assets/categoryicon.png";

import style from "./Categories.module.css";

const categoriesData = [
  {
    id: 1,
    name: "METIOX",
    description: (
      <>
        {"for Class"}
        <br /> {"9th & 10th"}
      </>
    ),
  },
  {
    id: 2,
    name: "APOLLOX",
    description: (
      <>
        {"for Class"}
        <br /> {"11th"}
      </>
    ),
  },
  {
    id: 3,
    name: "ATHENOX",
    description: (
      <>
        {"for Class"}
        <br /> {"12th"}
      </>
    ),
  },
];

const Categories = () => {
  const [active, setActive] = useState(1);

  const onClickActiveHandler = (idx) => {
    setActive(idx);
  };

  return (
    <div className={style.categoriesMainContainer}>
      <h1 className={style.headingTitle}>CATEGORIES</h1>
      <h3 className={style.headingLine}>
        The competition will be conducted in{" "}
        <span>Three Different Categories</span>
      </h3>
      <div className={style.categoriesContainer}>
        {categoriesData.map((obj, idx) => {
          return (
            <div
              key={idx}
              className={style.categoriesBox}
              onClick={() => onClickActiveHandler(idx)}
            >
              <div
                className={`${style.categoriesUnactiveContent} ${
                  active === idx ? style.active : ""
                }`}
              >
                <h4>{obj.name}</h4>
                <p>{obj.description}</p>
              </div>
              <div
                className={`${style.categoriesActiveContent} ${
                  active === idx ? style.active : ""
                }`}
              >
                <img src={categoryIcon} alt="" />
                <h4>{obj.name}</h4>
                <p>{obj.description}</p>
              </div>
              <div
                className={`${style.activeBar} ${
                  active === idx ? style.active : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
