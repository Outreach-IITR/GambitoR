import React from "react";
import Event from "../GAMBITOR SVG/GAMBITOR SVG/EVENTS.svg";
import events from "../GAMBITOR SVG/GAMBITOR SVG/H-EVENTS.svg";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import "./Event.css";

const Events = () => {
  let MAIN = {
    overflowX: "hidden",
    
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "150%",
  };
  // let event = {
  //   marginTop: window.innerWidth < 768 ? "18vh" : "25vh",
  //   width: window.innerWidth < 768 ? "30vw" : "30vw",
  // };

  let timeAllImg = {
    marginTop: window.innerWidth < 768 ? "5vh" : "10vh",
    width: window.innerWidth < 768 ? "70vw" : "60vw",
    zIndex: "-1",
  };

  return (
    <>
      <div className="event" style={MAIN}>
        <Header />
        <img src={events} className="events-title"/>
        
        <center>
          <div className="event-main">
          <h1>TIMELINE</h1>
          <img src={Event} className="event-heading" alt="" style={timeAllImg} />
        
          </div>
         
          
        </center>
        <Footer />
      </div>
    </>
  );
};

export default Events;