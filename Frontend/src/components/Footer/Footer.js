import React from 'react';
import './Footer.css';
import Logo from '../images/Group 1189.png';
import img from '../images/Group 1318.png';
// import brochure from '../Footer/GambitoRBrochure.pdf';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div>
            <div className="footer">

                <div className="part1">
                    <img src={Logo} alt='' className='logoF' />
                </div>
                {/* <div className='mobile-footer' style={{display:"none"}}> */}
                {/* <div className='footer-text'> */}
                <div className="part2" style={{ display: "block" }}>
                    <ul className="">
                        <li className="">
                            <Link to="/about" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>ABOUT</Link>
                        </li>
                        <li className="">
                            <Link to="/event" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>EVENTS</Link>
                        </li>
                        <li className="">
                            <Link to="/contact" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>CONTACT</Link>
                        </li>
                        <li className="">
                            <Link to="/contact" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>INITIATORS</Link>
                        </li>
                    </ul>
                    <div className="mobile-img">
                        <img src={img} alt="" className='' />
                    </div>
                </div>
                <div className="part3">
                    <ul className="">
                        <li className="">
                            <Link to= "/practicepaper" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>RESOURCES</Link>
                        </li>
                        <li className="">
                            <Link to= 'https://drive.google.com/uc?export=download&id=1AFJ0bd3fW0ANG3rV_hihGoT_1A9nftRG' className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>SYLLABUS</Link>
                        </li>
                        <li className="">
                            <Link to="/practicepaper" className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>PRACTICE PAPERS</Link>
                        </li>
                        <li className="">
                            <Link to= 'https://drive.google.com/uc?export=download&id=1rBVgIcuDTD9uO0AiIy3-sfGPD40CSJ99' className="text-white" style={{ textDecoration: "none" }}><i className="fas pe-3"></i>BROCHURE</Link>
                        </li>
                    </ul>
                    <div className='mobile-follow'>

                        <h5 style={{ color: "white" }}>FOLLOW US</h5>


                        <ul>
                            <li>
                                <Link to="https://www.facebook.com/profile.php?id=100094215150920&mibextid=ZbWKwL" target='_blank' rel="noreferrer">
                                    <FaFacebook className="f-icons" color="white" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://instagram.com/gambitor.iitr?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target='_blank' rel="noreferrer">
                                    <FaInstagram className="f-icons" color="white" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/company/gambitor-iit-roorkee/" target='_blank' rel="noreferrer">
                                    <FaLinkedin className="f-icons" color="white" />
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* </div> */}
                <div className="part4">
                    <div className='follow'>
                        <div>
                            <h5 style={{ color: "white" }}>FOLLOW US</h5>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/profile.php?id=100094215150920&mibextid=ZbWKwL" target='_blank' rel="noreferrer">
                                        <FaFacebook className="f-icons" color="white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://instagram.com/gambitor.iitr?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target='_blank' rel="noreferrer">
                                        <FaInstagram className="f-icons" color="white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/gambitor-iit-roorkee/" target='_blank' rel="noreferrer">
                                        <FaLinkedin className="f-icons" color="white" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" className='' />
                    </div>
                </div>


                {/* </div> */}
                {/* </div> */}
                {/* // </div> */}
            </div>
            <div className="text-center" style={{ color: "grey"}}>PRIVACY POLICY | COPYRIGHT | TERMS</div>
        </div>

    )
}

export default Footer;