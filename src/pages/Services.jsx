import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { BsSearch, BsCodeSlash, BsBrush } from 'react-icons/bs';

const Services = () => {
  const services = [
    {
      icon: <BsBrush />,
      title: "UX Design",
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
      icon: <BsCodeSlash />,
      title: "Développement web",
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
    },
    {
      icon: <BsSearch />,
      title: "Référencement",
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
  ];

  return (
    <div>
      <div className="services-header">
        <img src="/images/banner.jpg" alt="image de fond pour les services" className="img-fluid w-100" />
      </div>

      <div className="container py-5">
        <div className="text-center mb-5">
          <div className="d-inline-block my-3 py-3 px-5 border-4 border-bottom border-primary">
            <h2 className="fw-bold fs-1">Mon offre de services</h2>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 