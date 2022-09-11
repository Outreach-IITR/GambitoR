import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/table";

function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = (value) => {
    setLogin(value);
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      handleLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      {login ? <Dashboard /> : <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
