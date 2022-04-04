import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="images/wplogo.png" height= '48px' alt='logo'/> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Pricing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
                 <Link to='/Portfolio' className="nav-links" onClick={closeMobileMenu}>
                   Portfolio
                   </Link>
                </li>
                <li className="nav-item">
                 <Link to='/Contact-Us' className="nav-links" onClick={closeMobileMenu}>
                   Contact Us
                   </Link>
                </li>
                <li className="nav-item">
                 <Link to='/Study-Abroad' className="nav-links" onClick={closeMobileMenu}>
                   Study
                   </Link>
                </li>
                <li className="nav-item">
                 <Link to='/Get-a-design' className="nav-links" onClick={closeMobileMenu}>
                   Get a design
                   </Link>
                </li>
            <li>
              <Link
                to='/Sign-Up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;