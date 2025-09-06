import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3> "We Handle the Drama, You Enjoy the Fun" </h3>
        {/* Updated button with new class */}
        <Link to="/contact" className="contact-us-btn">Contact Us</Link>
      </div>

      {/* Image Slider */}
      <div className="home-slider">
        <div className="slider-wrapper">
         <img src="/assets/slider/1.jpg" alt="" />
          <img src="/assets/slider/2.jpg" alt="" />
          <img src="/assets/slider/3.jpg" alt="" />
          <img src="/assets/slider/4.jpg" alt="" />
          <img src="/assets/slider/5.jpg" alt="" />
          <img src="/assets/slider/6.jpg" alt="" />
          <img src="/assets/slider/7.jpg" alt="" />
          <img src="/assets/slider/8.jpg" alt="" /> 
          <img src="/assets/slider/9.jpg" alt="" />
          <img src="/assets/slider/10.jpg" alt="" />
          <img src="/assets/slider/11.jpg" alt="" />
 
         </div>
      </div>
    </section>
  );
};

export default Home;
