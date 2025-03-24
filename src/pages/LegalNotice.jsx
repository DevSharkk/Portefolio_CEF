import React from 'react';
import { Accordion } from 'react-bootstrap';
import { BsMap, BsGeoAlt, BsPhone, BsEnvelopeAt, BsGlobe } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
   
// SEO
<Helmet>
  <title>John Doe - Développeur Web Full Stack</title>
  <meta name="description" content="Développeur web spécialisé en React, JavaScript et PHP. Découvrez mon portfolio et mes services." />
  <meta name="keywords" content="développeur web, portfolio, react, javascript" />
</Helmet>


const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-1">Mentions légales</h2>
        </div>
        <div className="mx-auto border-bottom border-5 border-primary w-25 w-lg-50 mb-4"></div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Accordion defaultActiveKey="0" className="my-5">
              <Accordion.Item eventKey="0" className="border rounded">
                <Accordion.Header>
                  <span>Editeur du site</span>
                </Accordion.Header>
                <Accordion.Body>
                <div className="mb-4">
                  <h4 className="px-2">John Doe</h4>
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
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="border rounded">
                <Accordion.Header>
                  <span>Hébergeur</span>
                </Accordion.Header>
                <Accordion.Body className="mb-3">
                  <h2 className="fw-bold">alwaysdata</h2>
                  <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <BsGlobe className="me-2" /> 
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="border rounded">
                <Accordion.Header>
                  <span>Crédits</span>
                </Accordion.Header>
                <Accordion.Body>
                  <h2 className="fw-bold">Crédits</h2>
                  <p>Ce site a été réaliser par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr"  target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.</p>
                  
                  <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/"  target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
                  
                  <p className="fst-italic">Le favicon de ce site a été fournis par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe"  target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNotice; 