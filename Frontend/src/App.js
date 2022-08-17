import React from "react";
import ReactDOM from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./HelperComponents/Navbar/Navbar";
import Footer from "./HelperComponents/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/about" element={<NavBar />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
