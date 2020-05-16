import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => (
    <footer className="footerClass border-top py-3">
        <div className="container-fluid">
            <FontAwesomeIcon icon={faDiscord} className="mr-2" /> <FontAwesomeIcon icon={faTwitter} className="mr-2" /> <FontAwesomeIcon icon={faEnvelope} /> 
            <div className="disclaimer">
                <Link to="/privacy-policy">Privacy Policy</Link> 
                    <span className="footerDivider mx-2">|</span> 
                <Link to="/cookie-policy">Cookie Policy</Link>
                    <span className="footerDivider mx-2">|</span> 
                <Link to="/about-us">About Us</Link>
            </div>
            <div className="copyRight">
             &copy; Acan Translations.
            </div>
        </div>
    </footer>
);

export default Footer;