import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import Heading from "./Heading";

import updates from "./updatesContent";

import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.LandingContainer}>
      <Heading />
      <Updates updates={updates} />
    </div>
  );
};

export default LandingPage;
