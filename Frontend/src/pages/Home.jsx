// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Assuming you have these components
import Footer from '../components/Footer';

// Import your assets
import video1 from '../assets/videos/video_1.mp4'; // Your video asset
import ownerPhoto from '../assets/images/owner_photo.jpg';
import { FaArrowUp } from 'react-icons/fa'; // Using an icon for the button

// Import the new CSS file
import './Home.css';

const Home = () => {
    // State for the video slider (Logic preserved from your original code)
    const videos = [video1]; // You can add more video paths here
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // State for the scroll-to-top button
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    // Effect for the video slider (Logic preserved)
    useEffect(() => {
        // This interval only runs if you have more than one video
        if (videos.length > 1) {
            const sliderInterval = setInterval(() => {
                setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
            }, 10000); // Change video every 10 seconds

            return () => clearInterval(sliderInterval);
        }
    }, [videos.length]);
    
    // Effect for the scroll-to-top button visibility
    useEffect(() => {
        const checkScrollTop = () => {
            if (window.pageYOffset > 300) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            
            <main className="home-page">

                <Header />

                {/* HERO SECTION WITH VIDEO BACKGROUND */}
                <section className="hero-section">
                    <div className="hero-video-wrapper">
                        {videos.map((videoSrc, index) => (
                            <video
                                key={index}
                                src={videoSrc}
                                className={`hero-video ${index === currentVideoIndex ? 'active' : ''}`}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ))}
                    </div>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 data-aos="fade-up">Transform Your Space With Us</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            We design modern, timeless interiors for residential & commercial spaces.
                        </p>
                        <Link to="/quote" className="cta-button" data-aos="fade-up" data-aos-delay="400">
                            Start a Project
                        </Link>
                    </div>
                </section>

                {/* CEO/OWNER SECTION */}
                <section className="ceo-section" data-aos="fade-up">
                    <div className="container">
                        <div className="ceo-content">
                            <div className="ceo-image-wrapper">
                                <img src={ownerPhoto} alt="Shubham Satbhai, CEO" className="ceo-photo" />
                            </div>
                            <div className="ceo-info">
                                <h2>Meet Our Visionary</h2>
                                <h3>Shubham Satbhai, Founder & CEO</h3>
                                <p>
                                    With over 15 years of experience in creating elegant and functional spaces, my passion lies in bringing a client’s dream into reality. Our designs are rooted in creativity, sustainability, and modern functionality.
                                </p>
                                <Link to="/about" className="link-button">Learn More About Us</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            {/* SCROLL TO TOP BUTTON */}
            {showScrollBtn && (
                <button id="scrollToTopBtn" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </>
    );
};

export default Home;