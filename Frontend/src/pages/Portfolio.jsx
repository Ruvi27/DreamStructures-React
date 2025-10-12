// src/pages/Portfolio.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import all your images from the assets folder. This allows Webpack/Vite to process them.
import livingImg from '../assets/images/Portfolio/Living.jpg';
import kitchenImg from '../assets/images/Portfolio/Kitchen.jpg';
import officeImg from '../assets/images/Portfolio/Office.jpg';
import residentialImg from '../assets/images/Portfolio/Residencial.jpg';
import aImg from '../assets/images/Portfolio/A.jpg';
import bImg from '../assets/images/Portfolio/B.jpg';
import cImg from '../assets/images/Portfolio/C.jpg';
import dImg from '../assets/images/Portfolio/D.jpg';
import eImg from '../assets/images/Portfolio/E.jpg';
import fImg from '../assets/images/Portfolio/F.jpg';
import gImg from '../assets/images/Portfolio/G.jpg';
import hImg from '../assets/images/Portfolio/H.jpg';
import iImg from '../assets/images/Portfolio/I.jpg';
import jImg from '../assets/images/Portfolio/J.jpg';
import kImg from '../assets/images/Portfolio/K.jpg';
import lImg from '../assets/images/Portfolio/L.jpg';
import mImg from '../assets/images/Portfolio/M.jpg';
import nImg from '../assets/images/Portfolio/N.jpg';
import oImg from '../assets/images/Portfolio/O.jpg';
import pImg from '../assets/images/Portfolio/P.jpg';
import qImg from '../assets/images/Portfolio/Q.jpg';
import rImg from '../assets/images/Portfolio/R.jpg';
import sImg from '../assets/images/Portfolio/S.jpg';
import tImg from '../assets/images/Portfolio/T.jpg';
import uImg from '../assets/images/Portfolio/U.jpg';
import vImg from '../assets/images/Portfolio/V.jpg';
import wImg from '../assets/images/Portfolio/W.jpg';
import xImg from '../assets/images/Portfolio/X.jpg';
import yImg from '../assets/images/Portfolio/Y.jpg';
import zImg from '../assets/images/Portfolio/Z.jpg';
import a1Img from '../assets/images/Portfolio/A1.jpg';
import b1Img from '../assets/images/Portfolio/B1.jpg';
import c1Img from '../assets/images/Portfolio/C1.jpg';
import d1Img from '../assets/images/Portfolio/D1.jpg';
import e1Img from '../assets/images/Portfolio/E1.jpg';
import f1Img from '../assets/images/Portfolio/F1.jpg';
import g1Img from '../assets/images/Portfolio/G1.jpg';

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
    { src: residentialImg, alt: "Residential Project 1", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: aImg, alt: "Residential Project 2", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: bImg, alt: "Residential Project 3", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: cImg, alt: "Residential Project 4", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: dImg, alt: "Residential Project 5", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: eImg, alt: "Residential Project 6", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: fImg, alt: "Residential Project 7", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: gImg, alt: "Residential Project 8", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: hImg, alt: "Residential Project 9", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: iImg, alt: "Residential Project 10", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: jImg, alt: "Residential Project 11", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: kImg, alt: "Residential Project 12", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: lImg, alt: "Residential Project 13", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: mImg, alt: "Residential Project 14", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: nImg, alt: "Residential Project 15", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: oImg, alt: "Residential Project 16", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: pImg, alt: "Residential Project 17", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: qImg, alt: "Residential Project 18", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: rImg, alt: "Residential Project 19", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: sImg, alt: "Residential Project 20", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: tImg, alt: "Residential Project 21", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: uImg, alt: "Residential Project 22", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: vImg, alt: "Residential Project 23", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: wImg, alt: "Residential Project 24", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: xImg, alt: "Residential Project 25", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: yImg, alt: "Residential Project 26", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: zImg, alt: "Residential Project 27", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: a1Img, alt: "Residential Project 28", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: b1Img, alt: "Residential Project 29", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: c1Img, alt: "Residential Project 30", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: d1Img, alt: "Residential Project 31", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: e1Img, alt: "Residential Project 32", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: f1Img, alt: "Residential Project 33", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
    { src: g1Img, alt: "Residential Project 34", title: "Residential Projects", desc: "Beautiful homes with a touch of timeless elegance." },
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