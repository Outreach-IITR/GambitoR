import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {
        login ?
          <Dashboard /> : <Login />
      }
    </div>
  );
}

export default App;
