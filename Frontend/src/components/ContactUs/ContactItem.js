import React from "react";
import './ContactUs.css';
import { FaEnvelope , FaWhatsapp } from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { BrowserRouter , Link } from 'react-router-dom';
function ContactItem(props)
{
    return(
      
        <div class="photo-card">
      <div className="profile"><img src={props.img} alt="Your Photo" /></div> 
    <div class="card-contentContact">
      <h4>{props.name}</h4>
      <h5>{props.post}</h5>
      <div class="icons">
      <Link to={`mailto:${props.mail}`} target='_blank' rel="noreferrer"><FaEnvelope className="alignicons"  /></Link>
      <Link to={`tel:${props.phone}`} target='_blank' rel="noreferrer"><BsFillTelephoneFill   className="alignicons" /></Link>
      <Link to={props.whatsapp} target='_blank' rel="noreferrer"><FaWhatsapp className="alignicons whatsapp" style={{width:"1.2em" , height: "1.2em"}} /></Link>
      </div>
    </div>
  </div>
  
    );
}
export default ContactItem;