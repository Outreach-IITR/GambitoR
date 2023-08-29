import React from "react";
import img1 from "../images/H-ABOUT US.svg";
import apollox from "../images/Categories_apollox.svg";
import athenox from "../images/Categories_athenox.svg";
import metiox from "../images/Categories_metiox.svg";
import categories from "../images/H-CATEGORIES.svg";
import hat from "../images/HAT.svg";

//rounds
import poke1 from "../images/Charizard.svg";
import poke2 from "../images/Blue pokemon.svg";
import round from "../images/H-ROUNDS.svg";

//prizes
import poke3 from "../images/PIKACHU-1.svg";
import prizes from "../images/H-PRIZES.svg";

import img5 from "../images/H-DATE & VENUE.svg";
import "./AboutUs.css";
import { motion, spring } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const transition = { duration: 2, type: spring };
  return (
    <>
      <div className="main">
        <Header />
        <center>
          <img src={img1} alt="" className="aboutus" />
          <br />
          {/* <img src={img2} alt='' className='description' /> */}
          <div className="description">
            GambitoR is a national-level exam designed specially for the
            students from classes 9th to 12th out there who seek extraordinarism
            and have the passion to take on and conquer every challenge that
            awaits them. By testing the logical and analytical skills of the
            students by putting them against the questions designed by our
            student community, we seek to bring out the best in every
            individual. Organised by the Outreach Cell of IIT Roorkee, this year
            we bring to you our second and upgraded version, GambitoR 2.0!
          </div>
        </center>
        <img src={round} alt="" style={{ width: "30%" }} className="round-img" />
        <div id="twoRounds">The exam is going to be conducted in <span className="highlight">TWO ROUNDS</span></div>
        <div className="rounds">
          <center>
            <div className="roundDetails">
              <div className="round1">
                <h1 className="highlight" style={{ textAlign: "center", fontSize: "3vw" }}> INCEPTION ROUND</h1>
                <p>The first round of GambitoR 2.0, where you battle it out with your
                  fellow Pokémon Masters online, will be held on October 29th.
                  Showcase your logical skills and mettle in a 2 hours question
                  paper consisting of math, puzzles, code crunchers, etc., and put
                  your perception up for a challenge. The top 20 performers from
                  classes 9th and 10th, along with the top 10 performers from class
                  11th and the top 20 performers from class 12th, will be provided
                  with the golden opportunity of visiting IIT Roorkee for the next
                  round, Pinnacle, along with the chances of winning exciting prizes
                  and certificates.</p>
              </div>
              <div className="round2">
                <h1 className="highlight" style={{ textAlign: "center", fontSize: "3vw" }}> PINNACLE ROUND</h1>
                <p> When you have cleared the arena for the Inception round, we
                  eagerly await your visit to the campus of IIT Roorkee. Taking into
                  account the alluring beauty and extravagance of this campus along
                  with the exciting technical events of the second round, you can
                  already imagine that it'll be a glorious and exhilarating
                  experience. In this round, you will need to work your wits to the
                  end while also having fun while exploring the ins and outs of the
                  campus. The winners of the events will be awarded cash rewards and
                  certificates of excellence, along with several exciting prizes in
                  store for them.</p>
              </div>
              <motion.img
                initial={{ left: "95%" }}
                whileInView={{ left: "56%" }}
                transition={transition}
                src={poke1}
                alt=""
                className="poke1"
              />
              <motion.img
                initial={{ left: "-10%" }}
                whileInView={{ left: "10%" }}
                transition={transition}
                src={poke2}
                alt=""
                className="poke2"
              />
            </div>
          </center>
        </div>


        <img src={categories} alt="" className="main-Category" style={{ width: "30%" }} />

        <div className="categories">
          <img src={metiox} className="metiox" alt=""></img>
          <img src={apollox} className="apollox" alt=""></img>
          <img src={athenox} className="athenox" alt=""></img>
        </div>

        <div className="datevenuedetails">
          <center><img src={img5} alt="" className="datevenue" style={{ width: "50%" }} /></center>
          <ul>
            <li>
              GambitoR is a <span className="highlight">two-stage</span> competition
              for Metiox, Apollox and Athenox.
            </li>
            <br />
            <br />
            <li>
              The <span className="highlight">Inception round</span> will be
              conducted through online mode nationwide on{" "}
              <span className="highlight">29 October 2023</span>.
            </li>
            <br />
            <br />
            <li>
              The top performers in the Inception round will be invited to the
              campus of IIT Roorkee in the{" "}
              <span className="highlight">2nd week of October</span> for the
              Pinnacle round.
            </li>
            <br />
            <br />
            <li>

              They will get to participate in various competitions as well as to
              experience one of the most magical nights in IITR during the cultural
              extravaganza, popularly known as{" "}
              <span className="highlight">Thomso</span>.
            </li>
          </ul>
        </div>
        {/* <img src={img6} alt="" className="syllabus" /> */}

        <div className="prizes">
          <motion.img
            initial={{ top: "45%" }}
            whileInView={{ top: "1%" }}
            transition={transition}
            src={poke3}
            className="poke3"
            alt=""
          />
          <img src={prizes} className="prize" alt="" style={{ width: "25%" }} />
        </div>
        <div className="prizedetails">
          <ul>
            <li>
              All participants will receive a certificate of participation for being
              part of GambitoR.
            </li>
            <li>
              The winners will receive cash rewards and other exciting prizes worth
              Rs. 1 Lakh. Participate and find out for yourself!
            </li>
            <li>
              Winners of each category will be awarded as specified below:
            </li>

          </ul>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;