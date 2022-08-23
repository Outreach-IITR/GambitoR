import React from "react";
import style from "./Prize.module.css";
import vict from "../Verification/Assets/Group.png";
import pz from "./Assets/prize.png";

const Prize = () => {
  const prizes = [
    {
      id: 1,
      description:
        "All participants will receive a certificate of participation for being part of GambitoR. ",
    },
    {
      id: 2,
      description:
        "There are many more exciting prizes to be won along with it. Participate and find out for yourself!",
    },
  ];

  return (
    <div className={style.structure}>
      <div className={style.doodle}>
        <img src={vict} alt="" />
      </div>
      <h1>PRIZES</h1>
      <div className={`${style.doodle} ${style.mobile}`}>
        <img src={vict} alt="" />
      </div>
      <ul className={style.content}>
        {prizes.map((data, idx) => {
          return <li key={idx}>{data.description}</li>;
        })}
      </ul>

      <p>Winners of each category will be awarded as specified below:</p>
      <img className={style.prizes} src={pz} alt="" />
    </div>
  );
};

export default Prize;
