import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <Link 
          className={`navbar-brand ${location.pathname === '/' ? 'active-brand' : ''}`} 
          to="/"
        >
          JOHN DOE
        </Link>
        
        {/* Bouton hamburger qui s'affiche uniquement en mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/services' ? 'active-link' : ''}`} to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/realisations' ? 'active-link' : ''}`} to="/realisations">PORTEFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`} to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/mentions-legales' ? 'active-link' : ''}`} to="/mentions-legales">MENTIONS LÉGALES</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 