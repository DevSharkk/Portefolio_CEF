import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsMap, BsGeoAlt, BsPhone, BsEnvelopeAt } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
   
// SEO
<Helmet>
  <title>John Doe - Développeur Web Full Stack</title>
  <meta name="description" content="Développeur web spécialisé en React, JavaScript et PHP. Découvrez mon portfolio et mes services." />
  <meta name="keywords" content="développeur web, portfolio, react, javascript" />
</Helmet>

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Traitement du formulaire ici
      alert('Formulaire envoyé !');
    }
    
    setValidated(true);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold fs-1">Contact</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
      </div>
      <div className="mx-auto border-bottom border-5 border-primary w-25 mb-4"></div>
      
      <div className="card shadow border-0 rounded-3 overflow-hidden">
        <div className="card-body p-0">
          <div className="row g-0">
            {/* Formulaire de contact */}
            <div className="col-lg-6 p-4">
              <h3 className="border-bottom border-4 border-primary mb-5 pb-3 fw-bold">Formulaire de contact</h3>
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Votre nom"
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir votre nom.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Votre adresse email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir une adresse email valide.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir votre numéro de téléphone.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Sujet"
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir un sujet.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    required
                    as="textarea"
                    rows={13}
                    placeholder="Votre message"
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir votre message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <div className="d-grid w-25 mx-auto">
                  <Button variant="primary" type="submit">
                    Envoyer
                  </Button>
                </div>
              </Form>
            </div>
            
            {/* Coordonnées et carte */}
            <div className="col-lg-6 bg-light p-4 pt-0 pt-lg-4">
              <h3 className="border-bottom border-4 border-primary mb-5 pb-3 fw-bold">Mes coordonnées</h3>
              
              <div className="mb-4">
                <h4>John Doe</h4>
                <p className="d-flex align-items-center mb-0 mb-lg-2">
                  <BsMap className="me-2" /> 
                  <span>40 rue Laure Diebold</span>
                  </p>
                  <p className="d-flex align-items-center mb-0 mb-lg-2">
                  <BsGeoAlt className="me-2" /> 
                  <span>69009 Lyon, France</span>
                </p>
                <p className="d-flex align-items-center mb-0 mb-lg-2">
                  <BsPhone className="me-2" /> 
                  <span>10 20 30 40 50</span>
                </p>
                <p className="d-flex align-items-center mb-0 mb-lg-2">
                  <BsEnvelopeAt className="me-2" /> 
                  <span>john.doe@gmail.com</span>
                </p>
              </div>
              
              {/* Google Map */}
              <div className="ratio ratio-4x3">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6273285551316!2d4.798727776775207!3d45.77866371224245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c5701fd042356!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1689876543210!5m2!1sfr!2sfr"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 