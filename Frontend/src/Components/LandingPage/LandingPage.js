import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import Heading from "./Heading";
import Header from "../../HelperComponents/Header/Header";

import style from "./LandingPage.module.css";

var description1=`IIT Roorkee is glad to announce the first edition of GambitoR- the National School Championship where only creative thinking and quick wit can guide you to victory.Test yourselves against a comprehensive exam designed by our student community, that will call into question your logical and analytical skills. Compete with the best minds of the nation and win a chance to visit a major scientific & technical institute and a free pass to Thomso’22 (for subsequent rounds).`

const LandingPage = () => {
  return (
    <div className={style.LandingContainer}>
      <Heading />
      {/* <Header 
        headerText="About"
        descriptionText={description1}
      />
      <Header 
        headerText="Contact Us"
      /> */}

      <Updates />
      
    </div>
  );
};

export default LandingPage;
