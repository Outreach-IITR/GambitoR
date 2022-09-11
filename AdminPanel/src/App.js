import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from './Components/Dashboard/table';

function App() {
  const [login, setLogin] = useState(true);

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
