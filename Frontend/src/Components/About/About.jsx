import React from "react";
import RoundComp from "./RoundComp";

import style from "./About.module.css";
import Header from "../../HelperComponents/Header/Header";
import Categories from "./Categories";
import DateNVenue from "./DateNVenue";
import Syllabus from "./Syllabus";

const headDescription = (
  <>
    {`IIT Roorkee is glad to announce the first edition of GambitoR- the National
    School Championship where only creative thinking and quick wit can guide you
    to victory.`}
    <br />
    {`Test yourselves against a comprehensive exam designed by our
    studentcommunity, that will call into question your logical and analytical
    skills.Compete with the best minds of the nation and win a chance to visit a
    major scientific & technical institute and a free pass to Thomso’22 (for
    subsequent rounds).`}
  </>
);

const About = () => {
  return (
    <>
      <Header headerText="ABOUT US" descriptionText={headDescription} />
      <div className={style.AboutContainer}>
        <RoundComp />
        <Categories />
        <DateNVenue />
        <Syllabus />
      </div>
    </>
  );
};

export default About;
