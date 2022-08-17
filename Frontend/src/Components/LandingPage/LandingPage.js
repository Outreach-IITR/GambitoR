import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import updates from "../Events/updatesContent";
import Heading from "./Heading";

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
