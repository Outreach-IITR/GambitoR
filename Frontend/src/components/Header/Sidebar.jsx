import React, { useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    console.log(sidebarOpen)
    const sidebarHeight = sidebarOpen ? '54vh' : '10vh'; // Adjust the heights as needed

    const closeSidebarAndRefresh = () => {
        setSidebarOpen(false); // Close the sidebar
    };

    // useEffect(() => {
    //     if (sidebarOpen) {
    //         document.body.style.overflow = 'hidden'; // Disable scrolling
    //     } else {
    //         document.body.style.overflow = 'visible'; // Enable scrolling
    //     }
    //     return () => {
    //         document.body.style.overflow = 'visible'; // Re-enable scrolling when the component unmounts
    //     };
    // }, [sidebarOpen]);

    return (
        <div style={{ position: 'absolute', right: "3vw" , top: '5vh', maxHeight: sidebarHeight, backgroundColor: !sidebarOpen ? 'transparent' : 'rgba(21, 14, 78, 0.9)', overflow: 'hidden'}}>
            <CDBSidebar textColor="#fff" backgroundColor="transparent" toggled>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={toggleSidebar} style={{fontSize:'3vh' }} ></i>} >
                    <a href="/" className="text-decoration-none" style={{color:"#FFB400", fontSize:'3vh'}}>
                        MENU
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/about" activeClassName="activeClicked" onClick={closeSidebarAndRefresh}>
                            <CDBSidebarMenuItem  className='header-text'><i className="fas fa-message" style={{color:"#FFB400" , fontSize:"2vh"}} ></i> ABOUT</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/event" activeClassName="activeClicked" onClick={closeSidebarAndRefresh}>
                            <CDBSidebarMenuItem className='header-text'><i className="fas fa-calendar" style={{color:"#FFB400" , fontSize:"2vh"}} ></i> EVENTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/contact" activeClassName="activeClicked" onClick={closeSidebarAndRefresh}>
                            <CDBSidebarMenuItem className='header-text'><i className="fas fa-envelope" style={{color:"#FFB400" , fontSize:"2vh"}} ></i> CONTACT</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/practicepaper" activeClassName="activeClicked" onClick={closeSidebarAndRefresh}>
                            <CDBSidebarMenuItem className='header-text'><i className="fas fa-file"  style={{color:"#FFB400" , fontSize:"2vh"}} ></i> PAPERS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/resultForm" target="_blank" activeClassName="activeClicked" onClick={closeSidebarAndRefresh}>
                            <CDBSidebarMenuItem className='header-text'><i class="fa-solid fa-right-to-bracket" style={{color:"#FFB400" , fontSize:"2vh"}} ></i> RESULTS</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;