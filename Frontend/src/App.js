import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./HelperComponents/NavBar/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
