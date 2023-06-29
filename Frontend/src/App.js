// import React, { useEffect } from "react";

// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import Navbar from "./HelperComponents/NavBar/NavBar";

// import "./App.css";
// import Events from "./Components/Events/Events";
// import RegisterForm from "./Components/RegisterForm/RegisterForm";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Verification from "./Components/Verification/Verification";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navbar />}>
//             <Route index element={<LandingPage />} />
//             <Route element={<Events />} path="events" />
//             <Route element={<About />} path="about" />
//             <Route element={<RegisterForm referralCode="" />} path="register" />
//             <Route
//               element={<RegisterForm referralCode="AV01" />}
//               path="/registerAV01"
//             />
//             <Route element={<Contact />} path="contacts" />
//             <Route element={<Verification />} path="verify" />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import Navbar from "./Components/construction-site/navbar";
import Footer from "./Components/construction-site/footer";
import Left from "./Components/construction-site/left-section";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Left />
     
     <Footer />
    </div>
  );
}

export default App;

