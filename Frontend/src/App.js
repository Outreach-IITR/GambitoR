import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// RegistrationForm,RegistrationSuccessful and AboutUs page

// import RegistrationSuccessful from "./components/RegistrationSuccessful/RegistrationSuccesfull.jsx";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.jsx";
import RegistrationSuccesfull from "./components/RegistrationSuccessful/RegistrationSuccesfull";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
// import './App.css';
// import img1 from "./components/RegistrationSuccessful/image (1).png";
// import img2 from "./components/RegistrationSuccessful/image (2).png";
// import img3 from "./components/RegistrationSuccessful/image (3).png";
// import img4 from "./components/RegistrationSuccessful/image (4).png";

// ContactUs Page
// import Header from "./components/ContactUs/Header";
import ContactUs from "./components/ContactUs/ContactUs";
// import Footer from "./components/ContactUs/Footer";

//Papers page
import Papers from "./components/PapersPage/Papers";



//EventPages
import Events from "./components/Events/Events";



//MainPage
import Home from "./components/Home/Home.jsx";


function App() {
  return (
      
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" className='section' id="section1" element={<Home />} />
          <Route path="/about" className='section' id="section2" element={<AboutUs />} />
          <Route path="/event"className='section' id="section3" element={<Events />} />
          <Route path="/contact" className='section' id="section4" element={<ContactUs />} />
          <Route path="/practicepaper" className='section' id="section5" element={<Papers />} />
          <Route path="/register" className='section' id="section6" element={<RegistrationForm />} />
          <Route path="/registerSucessful" className='section' id="section6" element={<RegistrationSuccesfull />} />
        </Routes>
        
        
        {/* <Footer /> */}
      </div>
      
    
  );
}

export default App;
