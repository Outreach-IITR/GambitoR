import React from "react";
import style from "./contactCard.module.css";
import mail from "./Assets/mail.png";
import phone from "./Assets/phone.png";
import linkedin from "./Assets/linkedin.png";

const ContactCard = (props) => {
  return (
    <div className={style.contactCard}>
      <div className={style.cardImage}>
        <img src={props.member.photo} alt="" />
      </div>
      <h4 className={style.contactName}>{props.member.name}</h4>
      <p className={style.role}>{props.member.designation}</p>
      <div className={style.connect}>
        <a className={style.contactIcons} href={"mailto:" + props.member.email}>
          <img src={mail} alt="mail" />
        </a>
        <a className={style.contactIcons} href={"tel:" + props.member.ph_No}>
          <img src={phone} alt="phone" />
        </a>
        <a className={style.contactIcons} href={props.member.linkedIn}>
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
