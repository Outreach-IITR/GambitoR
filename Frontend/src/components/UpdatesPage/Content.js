import React from "react";
import "./UpdatesPage.css";
import { Link } from "react-router-dom";
function Content() {
    return (
        <div className="containerContent">
            <div className="text">
                <h1 className="title-content">GAMBITO<span className="customhead">R</span></h1>
                <p className="ptext">A countrywide tournament for the aspiring achievers of classes 9 to 12, which will let you step into the realm of intellect,
                    innovation, and determination. Stimulate your brain nerves and push the boundaries of your knowledge
                    with this enthralling exam formulated by the student community of IIT Roorkee. So, buckle up and get
                    ready for the celestial showdown of the year between the greatest masters!
                </p>
                 <Link to='/resultForm'><button className="btns">RESULTS</button></Link>
            </div>
        </div>
    );
}
export default Content;