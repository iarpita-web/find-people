import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from './Logo2.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@girmantech.com';
    setIsMobileMenuOpen(false);
  };

  const handleWebsiteClick = () => {
    window.open('https://girmantech.com', '_blank');
    setIsMobileMenuOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/girman-technologies', '_blank');
    setIsMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    navigate('/search');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'mobile-nav-menu-open' : ''}`}>
        <div className="mobile-nav-header">
          <img src={Logo2} alt="Girman Technologies" className="logo-img" />
          <button 
            className="mobile-nav-close"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>
        <div className="mobile-nav-links">
          <button onClick={handleSearchClick} className="mobile-nav-link">
            SEARCH
          </button>
          <button onClick={handleWebsiteClick} className="mobile-nav-link">
            WEBSITE
          </button>
          <button onClick={handleLinkedInClick} className="mobile-nav-link">
            LINKEDIN
          </button>
          <button onClick={handleContactClick} className="mobile-nav-link">
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;