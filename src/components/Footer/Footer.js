import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => (
    <footer className="footerClass border-top py-3">
        <div className="container-fluid">
            <a href="https://discord.gg/nuTAKpM" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="mr-2" />
            </a> 
            <a href="https://twitter.com/Nappysubs" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            </a> 
            <a href="mailto:acantranslations@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a> 
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