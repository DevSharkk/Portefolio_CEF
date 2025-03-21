import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-brand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">JOHN DOE</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/realisations">PORTEFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mentions-legales">MENTIONS LÉGALES</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 