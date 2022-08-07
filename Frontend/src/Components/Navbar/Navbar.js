import React from "react";
import styles from "./Navbar.module.css";
import navLogo from "./assets/navLogo.png";

function Navbar(){
    return(
        <div className={styles.mainNav}>
        <img className={styles.navLogo} alt="img" src={navLogo} />
        <ul className={styles.navList}>
            <li class="right-nav-itemsmain"><a href="#">About</a></li>
            <li class="right-nav-items"><a href="#">Events</a></li>
            <li class="right-nav-items"><a href="#">Events</a></li>
            <li class="right-nav-items"><a href="#">Events</a></li>
            <li class="right-nav-items"><a href="#">Contacts</a></li>
            <li class="right-nav-items"><a href="#">Register</a></li>
        </ul>  
        </div>
    )
}

export default Navbar;