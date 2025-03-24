import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { Helmet } from 'react-helmet';
   
// SEO
<Helmet>
  <title>John Doe - Développeur Web Full Stack</title>
  <meta name="description" content="Développeur web spécialisé en React, JavaScript et PHP. Découvrez mon portfolio et mes services." />
  <meta name="keywords" content="développeur web, portfolio, react, javascript" />
</Helmet>

const Portfolio = () => {
  const projects = [
    {
      image: '/images/fresh-food.jpg',
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      technology: 'Site réalisé avec PHP et MySQL'
    },
    {
      image: '/images/restaurant-japonais.jpg',
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      technology: 'Site réalisé avec WordPress'
    },
    {
      image: '/images/espace-bien-etre.jpg',
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne',
      technology: 'Site réalisé avec LARAVEL'
    },
    {
      image: '/images/seo.jpg',
      title: 'SEO',
      description: 'Amélioration du référencement d\'un site e-commerce',
      technology: 'Utilisation des outils SEO'
    },
    {
      image: '/images/coder.jpg',
      title: 'Création d\'une API',
      description: 'Création d\'une API RESTFUL publique',
      technology: 'PHP - SYMFONY'
    },
    {
      image: '/images/screens.jpg',
      title: 'Maquette d\'un site web',
      description: 'Création du prototype d\'un site',
      technology: 'Réalisé avec FIGMA'
    }
  ];

  return (
    <div>
      <div className="services-header">
        <img src="/images/banner.jpg" alt="image de fond pour les services" className="img-fluid w-100" />
      </div>

      <div className="container py-5">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3 pb-3 px-5">
            <h2 className="fw-bold fs-1">Portefolio</h2>
            <p>Voici quelques unes de mes réalisations</p>
            <div className="row justify-content-center my-4">
              <div className="col-6 col-lg-12">
                <div className="border-bottom border-5 border-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <PortfolioCard 
                image={project.image}
                title={project.title}
                description={project.description}
                technology={project.technology}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 