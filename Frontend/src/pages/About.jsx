// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images and videos
import aboutPhoto from '../assets/images/services/freeconsult.png';
import teamPhoto from '../assets/WhatsApp Image 2025-09-13 at 17.22.20_1881d174.jpg';
import video4 from '../assets/videos/video4.mp4';
import video2 from '../assets/videos/homedesign.mp4'
import video3 from '../assets/videos/video3.mp4';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="about">
          <h2>About Us</h2>
          <div className="about-container">
            <img src={aboutPhoto} alt="Our Office" className="about-photo" />
            <div className="about-info">
              <p>Dream Structure Interiors was founded with a vision to transform ordinary spaces into extraordinary experiences. We believe interiors should not only look beautiful but also enhance the way people live and work.</p>
              <p>With a talented team of designers, architects, and craftsmen, we specialize in modern, timeless, and sustainable designs that reflect the personality and lifestyle of our clients.</p>
              <p>Our approach is collaborative we work closely with our clients from concept to completion, ensuring every detail aligns with their vision.</p>
            </div>
          </div>

          <div className="about-gallery">
            <div className="about-item">
              <video autoPlay muted loop>
                <source src={video4} type="video/mp4" />
              </video>
              <div className="overlay"><p>Pin-point Measurements.</p></div>
            </div>
            <div className="about-item">
              <img src={teamPhoto} alt="Team Collaboration" />
              <div className="overlay"><p>A passionate team dedicated to delivering best results.</p></div>
            </div>
            <div className="about-item">
              <video autoPlay muted loop>
                <source src={video2} type="video/mp4" />
              </video>
              <div className="overlay"><p>Watch our journey and projects in motion.</p></div>
            </div>
            <div className="about-item">
              <video autoPlay muted loop>
                <source src={video3} type="video/mp4" />
              </video>
              <div className="overlay"><p>Delicate Handcrafted Carpentering.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;