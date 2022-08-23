import React from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./HelperComponents/NavBar/NavBar";

import "./App.css";
import Events from "./Components/Events/Events";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<LandingPage />} />
            <Route element={<Events />} path="events" />
            <Route element={<About />} path="about" />
            <Route element={<RegisterForm />} path="register" />
            <Route element={<Contact />} path="contacts" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
