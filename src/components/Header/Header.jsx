import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className="brand">પ્રસંગ</span>
      </div>

      {/* Nav Links */}
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
