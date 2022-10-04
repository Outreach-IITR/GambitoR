import React from "react";

import style from "./DateNVenue.module.css";

const dateContent = [
  {
    id: 1,
    content: (
      <>
        GambitoR is a <span>two-stage</span> competition for Metiox, Apollox and
        Athenox.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        The <span>Inception round</span> will be conducted through online mode
        nationwide on 9th October 2022.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        The top performers in the Inception round will be invited to the campus
        of IIT Roorkee in the <span>end of October</span> for the Pinnacle
        round.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        They will get to participate in various competitions as well as
        experience the beauty, charm and historical significance that crowns the campus of <span>IIT Roorkee</span>.
      </>
    ),
  },
];

const DateNVenue = () => {
  return (
    <div className={style.dateNVenueContainer}>
      <h1 className={style.headingTitle}>{"DATE & VENUE"}</h1>
      <ul className={style.content}>
        {dateContent.map((obj, idx) => {
          return (
            <li key={idx}>
              <p className={style.description}>{obj.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DateNVenue;
