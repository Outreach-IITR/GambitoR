import React from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./HelperComponents/Footer/Footer";
import Navbar from "./HelperComponents/NavBar/NavBar";

import "./App.css";
import Events from "./Components/Events/Events";
import RegisterForm from "./Components/RegisterForm/RegisterForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<LandingPage />} />
            <Route element={<Events />} path="events" />
            <Route element={<RegisterForm />} path="register" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
