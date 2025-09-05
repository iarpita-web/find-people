import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from './Logo2.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@girmantech.com';
  };

  const handleWebsiteClick = () => {
    window.open('https://girmantech.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/girman-technologies', '_blank');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo2} alt="Girman Technologies" className="logo-img" />
        </div>
        <div className="navbar-links">
          <button onClick={handleSearchClick} className="nav-link">
            SEARCH
          </button>
          <button onClick={handleWebsiteClick} className="nav-link">
            WEBSITE
          </button>
          <button onClick={handleLinkedInClick} className="nav-link">
            LINKEDIN
          </button>
          <button onClick={handleContactClick} className="nav-link">
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;