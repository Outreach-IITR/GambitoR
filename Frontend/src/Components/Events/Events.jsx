import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import updates from "./updatesContent";
import Header from "../../HelperComponents/Header/Header";
import Timeline from "./Timeline";

import style from "./Events.module.css";

const Events = () => {
  return (
    <>
      <Header headerText="Events" />
      <div className={style.EventsContainer}>
        <Timeline />
        <Updates updates={updates} />
      </div>
    </>
  );
};

export default Events;
