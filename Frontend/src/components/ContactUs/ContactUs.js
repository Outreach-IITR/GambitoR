import React from "react";
import './ContactUs.css';
import ContactItem from "./ContactItem";
import InitiatorItem from "./InitiatorItem";
import profileImg1 from "../images/nitin_sharma.jpg"
import profileImg2 from "../images/Sapna.jpg";
import profileImg3 from "../images/Sachin.jpeg";
import profileImg4 from "../images/Karan.jpg";
import profileImg5 from "../images/Malay.jpg";
import profileImg6 from "../images/Abhishek.jpeg";
import profileImg7 from "../images/Sankalp.jpeg";
import profileImg8 from "../images/Prashashtha.jpeg";
import pratham from "../images/pratham.jpg";
import akriti from "../images/akriti.jpg";
import aryanP from "../images/ARYAN PORWAL.jpg";
import adityar from "../images/ADITYA RAJ.jpg";
import Anirudh from "../images/ANIRUDH DEOL.jpg";
import Kamal from "../images/GOKLANI KAMALKUMAR.jpg";
import Ankit from "../images/Ankit Arya.jpg";
import Shoilayee from "../images/Shoilayee.jpg";
import Payal from "../images/PAYAL ODEDARA.jpg";
import Devanshu from "../images/DEVANSHU HARISH BORKAR.jpg";
import Deshmukh from "../images/Aditya Deshmukh.jpg";
import arin from "../images/Arin.jpg";
import sagar from "../images/SAGAR KHARAT.jpg";
import arpan from "../images/ARPAN KUMAR.jpg";
import ContactImg from "../images/Group 1214 (2).png";
import InitiatorImg from "../images/Group 1206.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function ContactUs() {
    return (
        <div className="containerC" >
            <Header />
            <div className="imagebox"><img src={ContactImg} className="styleimg" /></div>
            <div className="contactcards">
                <ContactItem img={profileImg1} name="Nitin Sharma" post="Convener" phone="+91 8955257367" mail="n_sharma@me.iitr.ac.in" whatsapp="https://wa.me/8955257367" />
            </div>
            <div className="contactcards">
                <ContactItem img={profileImg2} name="Sapna Burdak" post="Co-convener" mail="s_burdak@bt.iitr.ac.in" phone="+91 9783637967" whatsapp="https://wa.me/9783637967" />
                <ContactItem img={profileImg3} name="Sachin Merothiya" post="Co-convener" mail="s_merothiya@ee.iitr.ac.in" phone="+91 6397599591" whatsapp="https://wa.me/6397599591" />
                <ContactItem img={profileImg4} name="Karan Gangwar" post="Co-convener" mail="k_gangwar@me.iitr.ac.in" phone="+91 9005166180" whatsapp="https://wa.me/9005166180" />
            </div>
            <div className="contactcards">
                <ContactItem img={pratham} name="Pratham Goel" post="Executive" mail="p_goel@me.iitr.ac.in" phone="+91 6396338939" whatsapp="https://wa.me/6396338939" />
                <ContactItem img={akriti} name="Akriti Raj" post="Executive" mail="a_raj1@me.iitr.ac.in" phone="+91 6396338939" whatsapp="https://wa.me/6396338939" />
                <ContactItem img={Anirudh} name="Anirudh Deol" post="Executive" mail="a_deol@ch.iitr.ac.in" phone="+91 8733937178" whatsapp="https://wa.me/8733937178" />
                <ContactItem img={Kamal} name="Kamal Goklani" post="Executive" mail="g_kkishorbhai@me.iitr.ac.in" phone="+91 8733937178" whatsapp="https://wa.me/8733937178" />
            </div>
            <div className="contactcards">
            <ContactItem img={aryanP} name="Aryan Porwal" post="Executive" mail="a_porwal@me.iitr.ac.in" phone="+91 6396338939" whatsapp="https://wa.me/6396338939" />
                <ContactItem img={adityar} name="Aditya Raj" post="Executive" mail="a_raj1@ece.iitr.ac.in" phone="+91 6396338939" whatsapp="https://wa.me/6396338939" />
               
                <ContactItem img={Ankit} name="Ankit Arya" post="Executive" mail="a_karya@mt.iitr.ac.in" phone="+91 8733937178" whatsapp="https://wa.me/8733937178" />
                <ContactItem img={arin} name="Arin tiwari" post="Executive" mail="a_tiwari@me.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
            </div>
            <div className="contactcards">
                <ContactItem img={Payal} name="Payal Odera" post="Executive" mail="p_odedara@mt.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
                <ContactItem img={Devanshu} name="Devanshu Borkar" post="Executive" mail="d_hborkar@ph.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
                <ContactItem img={Deshmukh} name="Aditya Deshmukh" post="Executive" mail="a_mdeshmukh@ch.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
            </div>
            <div className="contactcards">
                <ContactItem img={sagar} name="Sagar Kharat" post="Executive" mail="s_kharat@cy.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
                <ContactItem img={arpan} name="Arpan Kumar" post="Executive" mail="arpan@me.iitr.ac.in" phone="+91 7648945408" whatsapp="https://wa.me/7648945408" />
                <ContactItem img={Shoilayee} name="Shoilayee Chaudhuri" post="Executive" mail="s_chaudhuri@ch.iitr.ac.in" phone="+91 8733937178" whatsapp="https://wa.me/8733937178" />
            </div>
            <div className="imagebox"><img src={InitiatorImg} className="styleimg" /></div>
            <div className="contactcards">
                <InitiatorItem img={profileImg5} name="Malay Kalavadia" />
                <InitiatorItem img={profileImg6} name="Abhishek Kumar" />
                <InitiatorItem img={profileImg7} name="Sankalp Raj" />
                <InitiatorItem img={profileImg8} name="Prashashtha Jain" />
            </div>
            <Footer />
        </div>
    );
}
export default ContactUs;