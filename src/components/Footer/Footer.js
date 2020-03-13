import React from 'react';
import FooterStyles from './Footer.module.scss';

const Footer = () => (
    <footer className={FooterStyles.footerClass}>
        <div className="container-fluid">
            <span>&copy; NappySubs { new Date().getFullYear() }</span>
        </div>
    </footer>
);

export default Footer;