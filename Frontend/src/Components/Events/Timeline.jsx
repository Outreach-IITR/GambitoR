import React from "react";

import timeline from "./Assets/timeline.png";

import style from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={style.TimelineContainer}>
      <h3 className={style.heading}>TIMELINE</h3>
      <img src={timeline} alt="" className={style.timeline} />
    </div>
  );
};

export default Timeline;
