import React from 'react';
import { Button } from 'react-bootstrap';

const PortfolioCard = ({ image, title, description, technology }) => {
  return (
    <div className="card h-100 border serviceCard">
      <img src={image} className="card-img-top" alt={title} style={{ height: '300px', objectFit: 'cover' }} />
      <div className="card-body text-center">
        <h4 className="card-title fw-bold">{title}</h4>
        <p className="card-text">{description}</p>
        
        {/* Button to view the project */}
        <Button variant="primary" size="sm">Voir le site</Button>
      </div>
      
      {/* Card footer showing technologies used */}
      <div className="card-footer bg-light text-center text-muted">
        {technology}
      </div>
    </div>
  );
};

export default PortfolioCard; 