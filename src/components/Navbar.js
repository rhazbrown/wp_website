import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link as Link1 } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/wplogo.png" height="48px" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link1 to=" " className="nav-links" onClick={scrollToTop}>
                Home
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="/About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="/Pricing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link1>
            </li>
            <li className="nav-item">
              <Link
                to="Here"
                spy={true}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                offset={-80}
                duration={2500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact-Us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link1
                to="/Study-Abroad"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Study
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="/Get-a-design"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Get a design
              </Link1>
            </li>
            <li>
              <Link1
                to="/Sign-Up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link1>
            </li>
          </ul>
          <Link to="/Sign-Up " className="btn-mobile">
            {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
