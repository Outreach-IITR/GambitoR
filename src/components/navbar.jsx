import React from "react";


function Navbar(){
     return(
        <div className="navbar">
        <div className="logo">
            <img src="images/Frame.png" className="img1" alt="logo" />
            <img src="images/GAMBITOR.png" className="img2" alt="title" />
        </div>
           <button className="btn btn-outline">Download Brochure</button>
        </div>
     )
}

export default Navbar;