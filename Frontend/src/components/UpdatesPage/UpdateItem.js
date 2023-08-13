import React from "react";
import "./UpdatesPage.css";
import pokemon from "../images/pokeball (1) 1.png";
function UpdateItem()
{
    return(
    
    <div className="updateitem">
        <div className="poko"><img src ={pokemon} className="pokoimg" /></div>
        <div class="cardd">
         <div class="card-content">
            <p className="pcard">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className="card-text">TIME | DATE</p>
         </div>
        </div>

    </div>
    );
}
export default UpdateItem;