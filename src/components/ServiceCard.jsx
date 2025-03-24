import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card h-100 border serviceCard col-md-6">
      <div className="card-body text-center p-4">
        <div className="text-primary mb-3" style={{ fontSize: '2.5rem' }}>
          {icon}
        </div>
        <h3 className="card-title mb-3">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 