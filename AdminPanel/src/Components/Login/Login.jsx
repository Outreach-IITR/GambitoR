import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
    <div className={styles.Login}>
      <h1>Admin Login</h1>   
      <form className={styles.form}>
        <label className={styles.Input}>
          <input type="text" placeholder="Username" id="text" name="text" class="input-username"/> 
        </label>        
        <label className={styles.Input}>
          <input type="password" placeholder="Password" id="password" name="password" class="input-password"/>
        </label>      
        <button className={styles.button}>Login</button>  
      </form>    
    </div>
  </div>
  );
};

export default Login;
