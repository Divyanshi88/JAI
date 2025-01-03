import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>JAI</h2> 
      </div>
      <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MultimediaResources">High Court</Link></li>
        <li><Link to="/FeedBack">District Court</Link></li>
        <li><Link to="/FAQ">Supreme Court</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </nav>
  );
}

export default NavBar;
