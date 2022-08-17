import React from "react";
import Updates from "../../HelperComponents/Updates/Updates";
import updates from "./updatesContent";

import style from "./Events.module.css";
import Timeline from "./Timeline";

const Events = () => {
  return (
    <div className={style.EventsContainer}>
      <Timeline />
      <Updates updates={updates} />
    </div>
  );
};

export default Events;
