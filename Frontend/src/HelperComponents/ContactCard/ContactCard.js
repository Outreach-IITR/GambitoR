import React from 'react'
import style from "./contactCard.module.css";
import person from "./Assets/person.png"
import mail from "./Assets/mail.png"
import phone from "./Assets/phone.png"
import linkedin from "./Assets/linkedin.png"

const ContactCard = () => {
  return (
    <div className={style.contactCard}>
        <div className={style.cardImage}>
        </div>
        <h4 className={style.contactName}>Malay Kalavadia</h4>
        <p className={style.role}>Secretary</p>
        <div className={style.connect}>
            <a className={style.contactIcons}><img src={mail} alt="mail" /></a>
            <a className={style.contactIcons}><img src={phone} alt="phone" /></a>
            <a className={style.contactIcons}><img src={linkedin} alt="linkedin" /></a>
        </div>
    </div>
  )
}

export default ContactCard;