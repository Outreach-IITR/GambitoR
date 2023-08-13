import React from "react";
import "./UpdatesPage.css";
import updateImg from "../images/Group 1333.png"
import Updateitem from "./UpdateItem";
function Updates()
{
    return(
        <div className="updates">
            <div className="scrollable-container">
            <img src={updateImg} className="updateImg"/>
            <div className="scrollable-content" >
            <div className="cspace"><Updateitem /></div>
            <div className="cspace"><Updateitem /></div>
            <div className="cspace"><Updateitem /></div>
            <div className="cspace"><Updateitem /></div>
            <div className="cspace"><Updateitem /></div>
            </div>
            </div>

        </div>
    );
}
export default Updates;