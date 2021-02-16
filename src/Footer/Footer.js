import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='footer-wrapper'>    
            <div className='footer-text'>
                Copyright {date} • Emily Chow
            </div> 
        </div>
       
        ) 
     }


export default Footer;