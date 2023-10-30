import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Results from './Results';
import ResultImg from "../Results/rESULTS.svg"
import bckImg from "../Results/USERID LOGIN BG.svg";
import "./result.css";

const ResultForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
  });
  const [fetchedData, setFetchedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    axios.get('https://gambitor.iitr.ac.in/api/v1/result/', {
      params:{
        email : formData.email,
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        console.log(response.data.data)
        setFetchedData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  

  return (
    <div className='form'>
      {/* Display the form if fetchedData is null */}
      {fetchedData === null ? (
        <>
        <div className='containerR'>
        <Header />
        <center><img src={ResultImg} className="resImage"></img></center>
        <div className='res-div'>
        <div id="res-container" className='container-res'>
           <div className="background">
            <img src={bckImg} className="bckImage"></img>
           </div>
        <form className='element' onSubmit={handleSubmit}>
          <div className="title">Email</div>
          <input
            type="text"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="title">NAME</div>
          <input
            type="text"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="buttonCenter">
          <button className="submit-button" type="submit" onClick={handleSubmit}>
            SUBMIT
          </button></div>
        </form>
        </div>
      </div>
        <Footer />
        </div>
        </>
      ) : (
        // Display the fetched results if fetchedData is not null
        // {console.log (fetchedData)}
        <Results data={fetchedData}/>
      )}
    </div>
  );
};

export default ResultForm;
