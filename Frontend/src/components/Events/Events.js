import React from "react";
import TimelineAll from "../images/TimelineAll.png";
// import Timeline from "../images/TIMELINE.png";
import Event from "../images/Events.png";
// import bg from "../images/Background.png";
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
    height: "230%",
  };
  let event = {
    marginTop: window.innerWidth < 768 ? "18vh" : "25vh",
    width: window.innerWidth < 768 ? "30vw" : "30vw",
  };

  let timeAllImg = {
    marginTop: window.innerWidth < 768 ? "5vh" : "10vh",
    width: window.innerWidth < 768 ? "70vw" : "60vw",
    zIndex: "-1",
  };

  return (
    <>
      <div className="event" style={MAIN}>
        <Header />
        <center>
          <img src={Event} className="event-heading" alt="" style={event} />
          <br />
          <img
            src={TimelineAll}
            className="timeline"
            alt=""
            style={timeAllImg}
          />
        </center>
        <Footer />
      </div>
    </>
  );
};

export default Events;