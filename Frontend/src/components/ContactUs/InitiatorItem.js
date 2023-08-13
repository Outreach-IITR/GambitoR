import React from "react";
import './ContactUs.css';

function InitiatorItem(props)
{
    return(
        <div class="photo-card">
      <div className="profile"><img src={props.img} alt="Your Photo" /></div> 
    <div class="card-contentContact">
      <h4>{props.name}</h4>
      </div>
  </div>
    );
}
export default InitiatorItem;