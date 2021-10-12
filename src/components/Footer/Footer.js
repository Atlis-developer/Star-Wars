import './Footer.css';
import React from 'react';
import Logo from '../../images/Star_Wars.png'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <img src={Logo} alt='logo' className='logo' />
        <div className='footer-logo-small'>
          <a href="www.facebook.com" >
            <img src={Facebook} alt='facebook' className='facebook' />
          </a>
          <a href="www.instagram.com" >
            <img src={Instagram} alt='instagram' className='instagram' />
          </a>
        </div>
      </div>
      <div className='footer-txt'>
        <div className='reserved font-face-ht'>
          All rights Reserved.
        </div>
        <div className='policy font-face-ht'>
          Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Footer;
