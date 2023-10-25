import React from 'react'
import alien from './Group 28.png';
import message from './Group 1346.svg';
import "./RegistrationSuccessful.css";


const RegistrationClosed = () => {
  return (

    <div className="container-success">
      <center>
      <img className='alien' src={alien} alt="" />
      <br></br>
      <img className="success-msg" src={message} alt='' />
      <br></br>
      <a href='/'><button id='btn' >Continue</button></a>
      <br></br>
      </center>
    </div>

  )
}

export default RegistrationClosed;