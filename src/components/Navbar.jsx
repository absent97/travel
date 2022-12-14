import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./Button";

import "./navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(!click);
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
    <nav className="nav navbar">
      <div className="navbar-container">
        <Link onClick={closeMobileMenu} to="/" className="navbar-logo">
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        <div onClick={handleClick} className="menu-icon">
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/travel" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/travel/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="/travel/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="/travel/sign-up" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
};
