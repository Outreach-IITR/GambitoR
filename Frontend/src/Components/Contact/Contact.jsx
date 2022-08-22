import React from "react";
import Header from "../../HelperComponents/Header/Header";
import ContactCard from "../../HelperComponents/ContactCard/ContactCard";

import { Conveyor, Coordinator } from "./ContactData.js";

import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header headerText="CONTACT US" />
      <div className={style.ContactContainer}>
        <div className={style.conveyorGrid}>
          {Conveyor.map((obj, id) => {
            return (
              <div className={style.memberCard}>
                <ContactCard member={obj} />
              </div>
            );
          })}
        </div>
        <div className={style.coordinatorGrid}>
          {Coordinator.map((obj, id) => {
            return (
              <div className={style.memberCard}>
                <ContactCard member={obj} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
