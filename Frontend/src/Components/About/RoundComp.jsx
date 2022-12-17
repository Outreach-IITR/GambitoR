import React from "react";
import style from "./RoundComp.module.css";
import round1Image from "./Assets/round1.png";
import round2Image from "./Assets/round2.png";

const RoundComp = () => {
  return (
    <div className={style.roundCompContainer}>
      <h1 className={style.headingTitle}>ROUNDS</h1>
      <h3 className={style.headingLine}>
        The exam is going to be conducted in <span>TWO ROUNDS</span>
      </h3>
      <div className={style.contentContainer}>
        <div className={style.roundSection}>
          <div className={style.info}>
            <h2 className={style.infoHeading}>INCEPTION ROUND</h2>
            <div className={style.infoDescription}>
              <p>
                For the first round of the GambitoR, battle it out with your
                peers online. Wrestle a 2 hour long question paper consisting of
                math, puzzles, code crunchers etc, and put your logical and
                thinking skills up for a challenge.
              </p>{" "}
              <br />
              <p>
                The top 15 students each from the 9th & 10th and 11th grade
                category and top 20 students from 12th grade category will get
                to visit IIT Roorkee for the second round, ‘Pinnacle’ and win
                exciting gifts and certificates.
              </p>
            </div>
          </div>
          <div className={style.round1Image}>
            <img src={round1Image} alt="" />
          </div>
        </div>
        <div className={style.roundSection}>
          <div className={style.info}>
            <h2 className={style.infoHeading}>PINNACLE ROUND</h2>
            <div className={style.infoDescription}>
              <p>
                Once you’ve made it through, an exciting visit to the IITR
                campus awaits you. Add to that the excitement of the various
                technical events for the second round.
              </p>
              <p>
                Push your limits, gauge your potential and have fun while
                exploring and interacting in and around the campus.
              </p>
              <p>
                The top performers of the events will be{" "}
                <span>
                  awarded with cash prizes and certificates of excellence.
                </span>
              </p>
            </div>
          </div>
          <div className={style.round2Image}>
            <img src={round2Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundComp;
