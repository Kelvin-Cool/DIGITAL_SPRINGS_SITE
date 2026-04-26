import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} DIGITAL SPRINGS COMPUTING. All rights reserved.</p>
                    <h3>......digital computer waves!💿</h3>
                </div>
                <div className="footer-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;