import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Léon Deladot</p>
            <p className="mb-1">69000 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>
            
            <div className="social-icons">
              <a href="https://github.com/github-johndoe" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="me-3 text-secondary social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/twitter-johndoe" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="me-3 text-secondary social-icon">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/in/linkedin-johndoe" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="text-secondary social-icon">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li className="mb-2"><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">Portfolio</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">Fresh Food</Link></li>
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">Restaurant Akira</Link></li>
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">Espace bien-être</Link></li>
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">SEO</Link></li>
              <li className="mb-2"><Link to="/realisations" className="text-white text-decoration-none">Création d'une API</Link></li>
              <li><Link to="/realisations" className="text-white text-decoration-none">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 