// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h3>Dream Structure Interiors</h3>
          <p>Transforming spaces into timeless experiences. Residential & Commercial Interior Design with a modern touch.</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@dreamstructure.in</p>
          <p>Phone: +91 9325771599</p>
          <p>Address: Nanded City Pune 411068 & Parksyde Homes Nashik 422003, Maharashtra India.</p>
        </div>
        <div className="footer-info">
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/14TjHbUrBKJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/dream_structure_interior/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/+919325771599" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">© 2015 Dream Structure Interiors. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;