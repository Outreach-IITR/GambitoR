import React from "react";
import style from "./NavBar.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const NavBar = () => {
  return (
    <>
      <div>
        NavBar
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
