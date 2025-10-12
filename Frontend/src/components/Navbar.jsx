// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Import the new CSS for styling
import './Navbar.css';

// STEP 1: Import your logo image from the assets folder
import logoImage from '../assets/DSLogo.svg';

// STEP 2: The old inline SVG component 'Logo' is no longer needed and can be deleted.

const Navbar = () => {
    // State logic for scroll and menu remains unchanged
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop.current && currentScroll > 80) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header className="main-header" style={{ top: isNavVisible ? '0' : '-100px' }}>
                <div className="navbar-content-wrapper">
                    <NavLink to="/" className="logo-link" onClick={closeMenu}>
                        {/* STEP 3: Replace the <Logo /> component with an <img> tag */}
                        <img src={logoImage} alt="Company Logo" className="logo-image" />
                    </NavLink>
                    
                    <button 
                        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* The menu overlay remains unchanged */}
            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <nav className="overlay-nav">
                    <ul>
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
                        <li><NavLink to="/quote" onClick={closeMenu}>Get a Quote</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;