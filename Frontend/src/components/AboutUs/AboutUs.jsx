import React from 'react';
import img1 from './images/about_us.png';
import img2 from "./images/Group 1230 (1).png";
// import img3 from './images/rounds.png';
// import img4 from './images/categories.png';
import apollox from "./images/about section images/apollox.png"
import athenox from "./images/about section images/athenox.png"
import metiox from "./images/about section images/metiox.png"
import categories from "./images/about section images/categories.png"

//rounds
import poke1 from "./images/animation/poke 1.png"
import poke2 from "./images/animation/poke 2.png"
import round from "./images/animation/round.png"

//prizes
import poke3 from "./images/animation/poke 3.png"
import prizes from "./images/animation/prizes.png"

import img5 from './images/date_and_venue.png';
import img6 from './images/syllabus.png';
// import img7 from './images/prizes.png';
import img8 from './images/position_awards.png';
import './AboutUs.css';
import { motion, spring } from 'framer-motion'; 
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const transition = {duration: 2, type: spring};
  return (
    <>
      <div className='main'>
        <Header />
        <center>
          <img src={img1} alt="" className="aboutus" /><br />
          <img src={img2} alt='' className='description' />
        </center>
        <div className="rounds">
          <motion.img
            initial={{left: '95%'}}
            whileInView={{left: '55%'}}
            transition={transition}
            src={poke1} alt="" className="poke1"
          />
          <motion.img 
            initial={{left: '-10%'}}
            whileInView={{left: '10%'}}
            transition={transition}
            src={poke2} alt="" className="poke2"
          />
          <img src={round} alt="" className="round" />
        </div>
        
          <img src={categories} alt="" className="main-Category" />
        
        <div className='categories'>
          <img src={metiox} className='metiox' alt=""></img>
          <img src={apollox} className='apollox' alt=""></img>
          <img src={athenox} className='athenox' alt=""></img>
        </div>
        <img src={img5} alt="" className="datevenue" />
        <img src={img6} alt="" className="syllabus" />
        <div className="prizes">
          <motion.img 
            initial={{top: '40%'}}
            whileInView={{top: '7%'}}
            transition={transition}
            src={poke3} className='poke3' alt=""
          />
          <img src={prizes} className='prize' alt="" />
        </div>
        <img src={img8} alt="" className="awards" />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;