import { get } from "lodash";
import React, { useState } from "react";
import api from "../../https/api";
import styles from "./Login.module.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/api/v1/user/login", {
        email,
        password,
        passwordConfirm: password
      });
      window.localStorage.setItem('token', get(data, 'data.token'));
      handleLogin(true);
    } catch (err) {
      window.alert(get(err, 'response.data.message', "Error"))
      console.log(err)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Login}>
        <h1>Admin Login</h1>
        <form className={styles.form}>
          <label className={styles.Input}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
              id="text"
              name="text"
              class="input-username"
            />
          </label>
          <label className={styles.Input}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
              name="password"
              class="input-password"
            />
          </label>
          <button className={styles.button} onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
