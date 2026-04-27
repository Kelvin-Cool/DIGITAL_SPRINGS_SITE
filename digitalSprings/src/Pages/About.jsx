import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-header">
                <h2>About Us</h2>
                <p>Discover the heart and soul of Digital Springs Computing.</p>
            </div>

            <div className="about-grid">
                {/* Company Info Card */}
                <div className="about-card">
                    <div className="card-icon">🏢</div>
                    <h3>Digital Springs Computing</h3>
                    <p>
                        Digital Springs Computing is a visionary tech hub dedicated to empowering the next generation of developers. 
                        We specialize in cutting-edge web development, UI/UX design, and comprehensive technical training. 
                        Our mission is to create "digital computer waves" that transform how businesses and individuals interact with technology.
                    </p>
                    <p className="motto">"......digital computer waves!💿"</p>
                    <div className="card-actions">
                        <Link to="/Contact" className="cta-button">Get in Touch</Link>
                    </div>
                </div>

                {/* Founder Info Card */}
                <div className="about-card founder-card">
                    <div className="founder-avatar">DS</div>
                    <h3>The Founder</h3>
                    <p>
                        With a deep-rooted passion for software engineering and technical education, our founder established Digital Springs 
                        to bridge the gap between complex technology and accessible learning. By fostering an environment of innovation 
                        and excellence, the founder continues to lead the team toward creating impactful digital solutions.
                    </p>
                    <div className="card-actions">
                        <Link to="/Jobs" className="cta-button secondary">Join Our Team</Link>
                    </div>
                </div>
            </div>
            <div className="about-footer-nav">
                <Link to="/Home" className="back-home-link">← Back to Homepage</Link>
            </div>
        </div>
    );
};

export default About;