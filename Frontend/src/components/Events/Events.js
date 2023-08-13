import React from 'react';
import TimelineAll from "../images/TimelineAll.png";
import Timeline from "../images/TIMELINE.png";
import Event from "../images/Events.png";
import bg from "../images/Background.png";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import './Event.css'

// const Events = () => {
//     let MAIN = {
        // backgroundImage: `url(${bg})` ,
        // backgroundRepeat: "no-repeat" ,
        // backgroundPosition: "center" ,
        // backgroundSize: "cover" ,
        // width : "0vw" ,
        // height : "300vh",
        

const Events = () => {
    let MAIN = {
        overflowX : "hidden",
        backgroundRepeat: "no-repeat" ,
        backgroundPosition: "center" ,
        backgroundSize: "cover" ,
        width : "100vw" ,
        height : "230%",
       
      }
      let event = {
        marginTop : "25vh", 
        width : "30vw",
      }
      
      let timeAllImg = {
        marginTop : "10vh", 
        width : "60vw" ,
        zIndex : "-1" ,
        
      }
  return (
    <>
    <div className="event" style={MAIN}>
      <Header />
      <center>
      <img src={Event} alt="" style={event}/><br />
      <img src={TimelineAll} alt="" style={timeAllImg} />
      </center>
      <Footer />
    </div>
    </>
  )
}

export default Events;
