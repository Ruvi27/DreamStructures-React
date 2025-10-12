// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        alert("Thank you for your message. We will get back to you shortly!");
        e.target.reset();
    };

    return (
        <>
            <Header />
            <main className="page-content">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Contact;