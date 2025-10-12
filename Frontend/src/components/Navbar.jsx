// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import your logo image
import logoImage from '../assets/DSLogo44.png';

const Navbar = () => {
    // State for navbar visibility on scroll and menu toggle
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // NEW: State to track if the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Logic for showing/hiding navbar
            if (currentScroll > lastScrollTop.current && currentScroll > 80) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;

            // NEW: Set scrolled state based on scroll position
            setIsScrolled(currentScroll > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    // Array for navigation links remains the same
    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/services", name: "Services" },
        { path: "/portfolio", name: "Portfolio" },
        { path: "/about", name: "About Us" },
        { path: "/quote", name: "Get a Quote" },
        { path: "/contact", name: "Contact Us" },
    ];

    return (
        <>
            {/* Main Header Bar - UPDATED className for scroll effect */}
            <header
                className={`fixed top-0 left-0 z-[9999] w-full px-6 py-5 transition-all duration-300 ease-in-out md:px-10 ${
                    isNavVisible ? 'top-0' : '-top-24'
                } ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
            >
                <div className="mx-auto flex max-w-screen-xl items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={logoImage}
                            alt="Company Logo"
                            className="h-10 transition-transform duration-300 lg:h-14"
                        />
                    </Link>

                    {/* Hamburger Menu Button (no changes) */}
                    <button
                        onClick={toggleMenu}
                        className="relative z-[10002] h-6 w-8"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                                isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 !bg-[#C0A080]' : 'top-0'
                            }`}
                        ></span>
                        <span
                            className={`absolute top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></span>
                        <span
                            className={`absolute block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                                isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 !bg-[#C0A080]' : 'bottom-0'
                            }`}
                        ></span>
                    </button>
                </div>
            </header>

            {/* Full-screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 transition-opacity duration-500 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                {/* NEW: Close button for the popup */}
                <button
                    onClick={closeMenu}
                    className="absolute top-5 right-6 z-[10003] h-10 w-10 text-white md:top-8 md:right-10"
                    aria-label="Close menu"
                >
                    <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-[#C0A080]"></span>
                    <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#C0A080]"></span>
                </button>

                <nav>
                    <ul className="text-center">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className={`transform transition-all duration-300 ${
                                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}
                                style={{ transitionDelay: isMenuOpen ? `${150 + index * 50}ms` : '0ms' }}
                            >
                                <NavLink
                                    to={link.path}
                                    onClick={closeMenu}
                                    className="block py-3 text-4xl font-bold text-white transition-colors duration-300 [font-family:_'Playfair_Display',_serif] hover:text-[#C0A080] md:text-5xl"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;