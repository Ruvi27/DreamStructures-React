// src/pages/Quote.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Quote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Residential Design',
        budget: '',
        message: ''
    });
    const [file, setFile] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [fileError, setFileError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 20 * 1024 * 1024) { // 20MB limit
            setFileError('File too large. Max size 20MB.');
            setFile(null);
        } else {
            setFileError('');
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Submitting...');
        // In a real app, you would use fetch() or axios to send this to a backend server.
        // For now, we'll just simulate a successful submission.
        setTimeout(() => {
            setStatusMessage('Thank you! Your quote request has been sent.');
            e.target.reset();
        }, 1500);
    };

    return (
        <>
            <Header />
            <main>
                <section className="quote-form">
                    <h2>Request a Quote</h2>
                    <form onSubmit={handleSubmit}>
                        {statusMessage && <p className="form-message" style={{ display: 'block' }}>{statusMessage}</p>}
                        
                        <label htmlFor="name">Full Name</label>
                        <input id="name" type="text" name="name" onChange={handleChange} required />

                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" onChange={handleChange} required />

                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" name="phone" onChange={handleChange} required />

                        <label htmlFor="service">Service Type</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange}>
                            <option>Residential Design</option>
                            <option>Commercial Space</option>
                            <option>Office Interiors</option>
                            <option>Custom Project</option>
                        </select>

                        <label htmlFor="budget">Estimated Budget</label>
                        <input id="budget" type="text" name="budget" onChange={handleChange} />

                        <label htmlFor="fileUpload">Upload Floor Plan / Design (PDF, JPG, PNG, DOCX max 20MB):</label>
                        <input type="file" id="fileUpload" name="fileUpload" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                        {fileError && <small style={{ color: 'red', display: 'block' }}>{fileError}</small>}

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" onChange={handleChange}></textarea>

                        <button type="submit" className="btn btn-primary">Submit Request</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Quote;