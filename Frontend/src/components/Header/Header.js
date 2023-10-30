import React, { useState, useEffect } from "react";
import './Header.css';
import logo from "../images/Logo.png";
import gambitor from "../images/Gambitor.png";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar"; 
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`navh ${isScrolled ? "scrolled" : ""}`}>
      <input type="checkbox" id="check" />
      {/* <label htmlFor="check" className="checkbtn" onClick={toggleSidebar}> */}
        {/* <i className="fas fa-bars"></i> */}
      {/* </label> */}
      <label className="logoL">
        <Link to="/">
          <img src={logo} alt="" id="logo" className="logoh" />
          <img src={gambitor} alt="" id="gambitor" className="gambitorh" />
        </Link>
      </label>
      <ul className={`headerlist ${isSidebarOpen ? "active" : ""}`}>
        <li><Link to="/about" className={location.pathname === "/about" ? "activate" : ""}>About</Link></li>
        <li><Link to="/event" className={location.pathname === "/event" ? "activate" : ""}>Events</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "activate" : ""}>Contact</Link></li>
        <li><Link to="/practicepaper" className={location.pathname === "/practicepaper" ? "activate" : ""}>Practice Paper</Link></li>
        <li><Link to="/resultForm" className="active">Results</Link></li>
      </ul>
      <div className="sidebar">
        <Sidebar />
      </div>
    </nav>
  );
}

export default Header;
