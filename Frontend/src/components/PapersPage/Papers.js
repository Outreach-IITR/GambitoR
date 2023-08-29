import React from "react";
import "./Papers.css";
import Hpapers from "../GAMBITOR SVG/GAMBITOR SVG/H-PAPERS.svg"
import listimg from "../images/pokeball (1) 1.png"
import { BrowserRouter , Link } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Papers(){
    return(
        
        <div className="containerP" >
        <Header />
            <div className="mainContainer">
            <img src={Hpapers} className="paperImg" />
            {/* <div className="paperHeading"><h2 >PAPERS</h2></div> */}
            </div>
            <div className="papercontent">
                <div className="shiftbox"><div className="roundHeading"><h6>Inception Round</h6></div></div>
                <ul>
                
                    <li><Link to='https://drive.google.com/uc?export=download&id=1wwWvZsQ3yR5ycDGEiR6kuEUIbHdH9P_J' ><span><img src={listimg}  className="listimg" /></span>Metiox</Link></li>
                    <li><Link to='https://drive.google.com/uc?export=download&id=1wzZp4Dv5571EnB-6Nn3VOX5p1-bBrXAW' ><span><img src={listimg}  className="listimg" /></span>Apollox</Link></li>
                    <li><Link to='https://drive.google.com/uc?export=download&id=1xJy7kS63ERIjrnCWhzLQPwtcnp881oVL' ><span><img src={listimg}  className="listimg" /></span>Athenox</Link></li>
                </ul>
            </div>
            <div className="papercontent">
            <div className="shiftbox"><div className="roundHeading"><h6>Pinnacle Round</h6></div></div>
                <ul>
                    <li><Link to='https://drive.google.com/uc?export=download&id=1yy7bQJ7RR6NUThxs81kQ0Z6TwzWwmeTt' ><span><img src={listimg}  className="listimg" /></span>Metiox</Link></li>
                    <li><Link to='https://drive.google.com/uc?export=download&id=1yy7bQJ7RR6NUThxs81kQ0Z6TwzWwmeTt' ><span><img src={listimg} className="listimg" /></span>Apollox</Link></li>
                    <li><Link to='https://drive.google.com/uc?export=download&id=1wreyhTYQIE49v48_BjgG4ubxJCzFE-rD' ><span><img src={listimg} className="listimg" /></span>Athenox</Link></li>
                </ul>
            </div>
        <Footer />
        </div>
        
    );

}
export default Papers;