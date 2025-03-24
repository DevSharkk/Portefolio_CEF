import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const GitHubModal = ({ show, handleClose, githubData }) => {
  if (!githubData) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="border-bottom border-secondary bg-dark text-white">
        <Modal.Title>Profil GitHub</Modal.Title>
        <style>
          {`
            .modal-header .btn-close {
              filter: invert(1) grayscale(100%) brightness(200%);
            }
            
            @media (max-width: 991px) {
              .modal-dialog {
                max-width: 90%;
                margin: 1rem auto;
              }
            }
          `}
        </style>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <div className="d-flex flex-column flex-md-row">
          {/* Image à gauche (plus petite sur tablette) */}
          <div className="me-md-3 text-center text-md-start" style={{ flex: '0 0 auto' }}>
            <img 
              src="https://avatars.githubusercontent.com/u/19842736?v=4"
              alt="Avatar GitHub" 
              style={{ width: '200px', height: '200px', padding: '10px' }}
              className="mx-auto"
            />
          </div>
          {/* Contenu à droite */}
          <div style={{ flex: 1}} className="px-2 px-md-3 mt-3 mt-md-0">
            <div className="border-bottom border-secondary py-2 px-3">
            <i class="bi bi-person" style={{ paddingRight: '10px' }}></i>
              <a href="https://github.com/github-john-doe" id="link-name" target="_blank" rel="noopener noreferrer">
                {githubData.name}
              </a>
            </div>
            <div className="border-bottom border-secondary py-2 px-3">
            <i class="bi bi-geo-alt"></i>
            </div>

            <div className="py-2 border-bottom border-secondary">
              <p className="mb-0 px-3"><i class="bi bi-card-text" style={{ paddingRight: '10px' }}></i>{githubData.bio || 'Aucune bio disponible'}</p>
            </div>

            <div>
              <div className="py-2">
                <div className="border-bottom border-secondary">
                  <h6 className="px-3"><i class="bi bi-box" style={{ paddingRight: '10px' }}></i>Repositories : {githubData.public_repos}</h6>
                </div>
              </div>
              <div className="pb-2">
                <div className="border-bottom border-secondary">
                  <h6 className="px-3"><i class="bi bi-people" style={{ paddingRight: '10px' }}></i>Followers : {githubData.followers}</h6>
                </div>
              </div>
              <div className="col-md-12 pb-2">
                <div>
                  <h6 className="px-3"><i class="bi bi-people" style={{ paddingRight: '10px' }}></i>Following : {githubData.following}</h6>
                </div>
              </div>
            </div>

            {githubData.location && (
              <div className="mb-3 pb-3 border-bottom border-secondary">
                <h5>Localisation</h5>
                <p className="mb-0">{githubData.location}</p>
              </div>
            )}

            {githubData.blog && (
              <div className="mb-3">
                <h5>Site web</h5>
                <a href={githubData.blog} target="_blank" rel="noopener noreferrer" className="text-white">
                  {githubData.blog}
                </a>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-top border-secondary bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GitHubModal; 