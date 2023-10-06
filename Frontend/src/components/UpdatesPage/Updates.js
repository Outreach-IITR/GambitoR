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
            pcard={'The GambitoR examination Round 1, INCEPTION, will be conducted on the Thinkexam website on 29th October.'}
            /></div>
            <div className="cspace"><Updateitem 
            pcard={'All the details regarding timings and credentials for exam platform will be shared after 25th October via mail.'}
            /></div>
            <div className="cspace"><Updateitem 
            pcard={'Video solution for the sample papers will be available soon on our YouTube channel.'}
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