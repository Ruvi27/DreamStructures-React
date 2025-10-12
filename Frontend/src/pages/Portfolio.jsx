// src/pages/Portfolio.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import all your images from the assets folder. This allows Webpack/Vite to process them.
import livingImg from '../assets/images/Portfolio/Living.jpg';
import kitchenImg from '../assets/images/Portfolio/Kitchen.jpg';
import officeImg from '../assets/images/Portfolio/Office.jpg';
// ... import all other portfolio images (A.jpg, B.jpg, etc.)

import clientPriyaRohan from '../assets/images/Clients/priya&rohan.png';
import clientPatel from '../assets/images/Clients/Patel.png';
import clientSingh from '../assets/images/Clients/Singh.png';
import clientReddy from '../assets/images/Clients/Reddy.png';
import clientChopra from '../assets/images/Clients/chopra.png';
import clientNarayan from '../assets/images/Clients/Narayan.png';


const Portfolio = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // Show button if page is scrolled more than 400px
      if (!showScrollBtn && window.pageYOffset > 400) {
        setShowScrollBtn(true);
      } else if (showScrollBtn && window.pageYOffset <= 400) {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollBtn]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Data for portfolio items and testimonials to keep JSX clean
  const portfolioItems = [
    { src: livingImg, alt: "Luxury Living Room", title: "Luxury Living Room", desc: "Elegant interiors that bring warmth and class to modern spaces." },
    { src: kitchenImg, alt: "Modern Kitchen", title: "Modern Kitchen", desc: "Smart designs that blend functionality with style." },
    { src: officeImg, alt: "Office Space", title: "Office Spaces", desc: "Elegant work environments built on trust and innovation." },
    // You would continue to add all 37 portfolio items here
  ];

  const testimonials = [
    { src: clientPriyaRohan, alt: "Client Priya & Rohan", text: `"Working with them was an absolute pleasure... The attention to detail is just incredible!"`, author: "— Priya & Rohan Sharma, Pune" },
    { src: clientPatel, alt: "The Patel Family", text: `"We had a challenging space in our 2BHK, but they worked magic!... It's a functional masterpiece."`, author: "— The Patel Family, Nashik" },
    { src: clientSingh, alt: "Vikram Singh", text: `"The quality of work and the craftsmanship is simply impeccable... We couldn't be happier with our new home."`, author: "— Vikram Singh, Nashik" },
    { src: clientReddy, alt: "The Reddy Family", text: `"We wanted a home that honored our cultural heritage... Truly masterful work!"`, author: "— The Reddy Family, Chennai" },
    { src: clientChopra, alt: "The Kapoor Family", text: `"As a family with three young children, we needed a home that was beautiful but also highly functional... It truly feels like a family-first home."`, author: "— The Kapoor Family, Nashik" },
    { src: clientNarayan, alt: "The Narayan Family", text: `"They turned our dream home into a reality. The team is passionate, creative, and an absolute joy to work with. 10/10 would recommend!"`, author: "— Narayan Family, Pune" },
  ];

  return (
    <> {/* Using a React Fragment to wrap the component */}
      <Header />
      <main>
        {/* The "Go to Top" button is conditionally rendered based on state */}
        {showScrollBtn && <button id="scrollToTopBtn" onClick={scrollToTop}>Go to Top</button>}

        <section className="portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.src} alt={item.alt} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          {/* Note: I have only included the first few items. You would continue this pattern for all images. */}
        </section>

        <div className="trust-logos">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <img src={testimonial.src} alt={testimonial.alt} />
              <div className="testimonial-text">
                {testimonial.text}
                <br /><br />
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;