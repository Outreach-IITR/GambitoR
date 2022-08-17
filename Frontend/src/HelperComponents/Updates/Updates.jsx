import React from "react";

import style from "./Updates.module.css";

const Updates = (props) => {
  return (
    <div className={style.updateContainer}>
      <h1 className={style.heading}>Updates</h1>
      <ul className={style.content}>
        {props.updates.map((update, idx) => {
          return (
            <li key={idx}>
              <div className={style.description}>
                <p className={style.body}>{update.description}</p>
                <p className={style.time}>
                  {update.time + " | " + update.date}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Updates;
