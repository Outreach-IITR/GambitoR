import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import Heading from "./Heading";

import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.LandingContainer}>
      <Heading />
      <Updates />
    </div>
  );
};

export default LandingPage;
