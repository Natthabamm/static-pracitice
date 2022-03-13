import React from 'react';
import '../styles/NavigationBar.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import cart from '../assets/cart-icon.png';

const NavigationBar = () => {
  return (
    <>
      <nav>
        <div className='logo-brand'>
          <img src={logo} alt='logo' width={40} height={25} />
          <span className='branding'>
            <strong>Job</strong> Passcard
          </span>
        </div>
        <div className='nav-center'>
          <button>ABOUT US</button>
          <button>PASSCARD</button>
          <button>PROFILE</button>
        </div>
        <div className='nav-right'>
          <button className='search-btn'>
            <img src={search} alt='search' width={16} height={16} />
          </button>
          <button className='cart-btn'>
            <img src={cart} alt='cart' width={20} height={20} />
          </button>
          <div className='total-product'>1</div>
          <button>LOGIN</button>
          <div className='divide-vertical' />
          <button>SIGN UP</button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
