import './Header.css';
import React from 'react';
import Logo from '../../images/Star_Wars.png'


const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt='logo' className='logo' />
      <div className='container'>

        <div className='container-inside-language'>
          <div className='lang font-face-hr'>En&#8194;<span className='arrow'></span></div>
          
           	
        </div>
        <div className='container-inside-btn-login'>
          <div className='container-inside-login font-face-hr'>
            Log in
          </div>
          <button className='container-inside-btn'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
