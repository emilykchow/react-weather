import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='footer-wrapper'>     
            Copyright {date} . Emily Chow
        </div>
       
        ) 
     }


export default Footer;