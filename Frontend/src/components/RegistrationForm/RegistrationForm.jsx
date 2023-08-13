import React, { useState } from 'react';
import './RegistrationForm.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img3 from '../RegistrationSuccessful/image (3).png';
import heading from '../RegistrationForm/Student regis.png';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'none',
    schoolName: '',
    contactNumber: '',
    emailAddress: '',
    referralCode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate the database submission with a 2-second delay
    setTimeout(() => {
      axios.post('https://gambitor.iitr.ac.in/api/v1/registration', formData)
        .then((response) => {
          setSubmissionMessage('Registration successful!');
          setIsSubmitting(false);
          setFormData({
            name: '',
            class: 'none',
            schoolName: '',
            contactNumber: '',
            email: '',
            referralCode: '',
          });

          window.location.href = '/registerSucessful';
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
          setIsSubmitting(false);
        });
    }, 2000);
  };

  return (
    <div className='form'>
      <Header />
      <div className='form-div'>
        <center><img src={heading}></img></center>
        <div id="container" className='container-reg'>
          <div className='elements'>
            <div className="title">NAME</div>
            <input
              type="text"
              className="input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <div className="title">CATEGORY</div>
            <select
              name="class"
              className="input"
              value={formData.class}
              onChange={handleChange}
            >

              <option value="">Select an option</option>
              <option value="metiox">Class 9th or 10th (METIOX)</option>
              <option value="apollox">Class 11th (APOLLOX)</option>
              <option value="athenox">Class 12th (ANTHENOX)</option>

            </select>

            <div className="title">SCHOOL NAME</div>
            <input
              type="text"
              className="input"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />

            <div className="title">CONTACT NUMBER</div>
            <div className="verification">
              <input
                type="tel"
                className="input-verify"
                name="contactNumber"
                pattern="[6-9]\d{9}|0\d{10}"
                value={formData.contactNumber}
                onChange={handleChange}
              />

            </div>

            <div className="title">EMAIL ADDRESS</div>
            <div className="verification">
              <input
                type="email"
                className="input-verify"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            <div className="title">REFERRAL CODE</div>
              <input
                type="text"
                className="input"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
              />

            </div>

            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? 'Submitting...' : 'CONFIRM'}
            </button>

            {submissionMessage && <div>{submissionMessage}</div>}
            {errorMessage && <div style={{color:'#FFB400'}}>{errorMessage}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;