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
            <div className="cspace"><Updateitem 
            pcard={'The pre-registration of GambitoR 2.0 has ended. The registrations have officially started.'}
            /></div>
            <div className="cspace"><Updateitem 
            pcard={'Individuals who have already pre-registered need not complete the registration process on the website again.'}
            /></div>
            <div className="cspace"><Updateitem 
            pcard={'Practice papers with detailed syllabus for your ease in preparation are live now on the website.'}
            /></div>
            <div className="cspace"><Updateitem 
            pcard={'For regular updates, follow our social media handles as all updates will be posted on our social media only.'}
            /></div>
            </div>
            </div>

        </div>
    );
}
export default Updates;