import React from 'react'
import Content from '../UpdatesPage/Content';
import Updates from '../UpdatesPage/Updates';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';


const Home = () => {
  return (
    <div className='home'>
     <Header />
      <Content />
      <Updates />
      <Footer />
    </div>
  )
}

export default Home
