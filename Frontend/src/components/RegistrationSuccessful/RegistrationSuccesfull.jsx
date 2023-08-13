import React from 'react'
import './RegistrationSuccessful.css'
const RegistrationSuccesfull = (props) => {
  return (
    
      <div className="container">
        <img src={props.img} alt="" />
        <div className="success">
          <div id="successful">Registration Succesful</div>
          <div id="best-luck">Best of luck for Gambitor! Check your mail for credentials and stay tuned for further updates!</div>
        </div>
        <a href='/'><button id='btn' >CONTINUE</button></a>
      </div>
  
  )
}

export default RegistrationSuccesfull;
