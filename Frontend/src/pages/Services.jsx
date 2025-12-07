// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images from your assets folder
import freeConsultImg from '../assets/images/Services/freeconsult.png';
import electricalImg from '../assets/images/Services/electrical.png';
import kitchenTrolleyImg from '../assets/images/Services/kitchen trolley.jpg';
import commercialWorkImg from '../assets/images/Services/commercial work.png';
import residentialImg from '../assets/images/Services/residential.png';
import ceilingImg from '../assets/images/Services/ceiling.png';
import sofaImg from '../assets/images/Services/sofa set.png';
import paintingImg from '../assets/images/Services/painting.jpg';
import carpentryImg from '../assets/images/Services/carpentry.png';
import kitchenCabinetImg from '../assets/images/Services/kitchen cabinet.png';

const Services = () => {
  const servicesData = [
    { href: "/contact", img: freeConsultImg, alt: "Free Consultation", title: "FREE CONSULTATION", desc: "Get a free consultation before starting your project. No obligations!", highlight: true },
    { href: "/quote", img: electricalImg, alt: "Electrical Work", title: "Electrical Work", desc: "Complete wiring, lighting, maintenance and installation services." },
    { href: "/quote", img: kitchenTrolleyImg, alt: "Kitchen Trolley", title: "Kitchen Trolley", desc: "Custom modular kitchen trolleys for efficient storage." },
    { href: "/quote", img: commercialWorkImg, alt: "Commercial Work", title: "Commercial Work", desc: "Large-scale commercial electrical, carpentry, and renovation projects." },
    { href: "/quote", img: residentialImg, alt: "Residential Work", title: "Residential Work", desc: "All types of home renovation, repair, and interior finishing services." },
    { href: "/quote", img: ceilingImg, alt: "False Ceiling", title: "POP False Ceiling", desc: "Stylish false ceiling solutions for homes and offices." },
    { href: "/quote", img: sofaImg, alt: "Sofa Set", title: "Sofa", desc: "Custom sofa design and repair for comfort & style." },
    { href: "/quote", img: paintingImg, alt: "Painting", title: "Painting", desc: "Interior and exterior painting with premium finishes." },
    { href: "/quote", img: carpentryImg, alt: "Carpentry & Furniture", title: "Carpentry & Furniture", desc: "All types of wooden furniture design, repair, and polishing." },
    { href: "/quote", img: kitchenCabinetImg, alt: "Kitchen Cabinet", title: "Kitchen Cabinet", desc: "All types of modern kitchen cabinet desgins." },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <Link to={service.href} className="service-card-link" key={index}>
                <div className={`service-card ${service.highlight ? 'free-consultation highlight' : ''}`}>
                  <img src={service.img} alt={service.alt} />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;