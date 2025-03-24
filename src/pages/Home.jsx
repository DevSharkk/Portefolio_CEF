import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import GitHubModal from '../components/GitHubModal';
import { Helmet } from 'react-helmet';
   
// SEO
<Helmet>
  <title>John Doe - Développeur Web Full Stack</title>
  <meta name="description" content="Développeur web spécialisé en React, JavaScript et PHP. Découvrez mon portfolio et mes services." />
  <meta name="keywords" content="développeur web, portfolio, react, javascript" />
</Helmet>

/**
 * Home Page Component
 * Main landing page with hero section, about section, and skills section
 */
const Home = () => {
  // State to control GitHub modal visibility
  const [showModal, setShowModal] = useState(false);
  
  // State to store GitHub profile data
  const [githubData, setGithubData] = useState(null);

  /**
   * Fetch GitHub profile data when component mounts
   */
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to static data if API call fails
        setGithubData({
          name: "John Doe",
          login: "github-john-doe",
          avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
          bio: "As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.",
          public_repos: 1,
          followers: 17,
          following: 0,
          html_url: "https://github.com/github-john-doe"
        });
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div>
      <div className="hero-section position-relative" style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-white" 
             style={{ opacity: 0.3 }}></div>
        
        <div className="hero-content text-white text-center position-relative px-4 py-5">
          <h1 className="display-4 fw-bold mb-2">Bonjour, je suis John Doe</h1>
          <h2 className="mb-4 mb-md-5">Développeur web full stack</h2>
          <Button 
            variant="danger" 
            size="lg" 
            className="px-4 py-2"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </Button>
        </div>
      </div>

      <div className="container py-0 py-md-5 shadow-lg my-5 rounded-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-5 pb-3 border-4 border-bottom border-primary fw-bold">A propos</h2>
            <img 
              src="./public/images/john-doe-about.jpg" 
              alt="John Doe" 
              className="img-fluid mb-4 col-md-12"
              style={{ maxWidth: '100%' }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus, animi commodi ipsam error quo reprehenderit, asperiores praesentium eligendi minima quis alias hic, harum natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus, animi commodi ipsam error quo reprehenderit, asperiores praesentium eligendi minima quis alias hic, harum natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus, animi commodi ipsam error quo reprehenderit, asperiores praesentium eligendi minima quis alias hic, harum natus.</p>
          </div>

          {/* Progress bar with Bootstrap */}
          <div className="col-md-6">
            <h2 className="mb-5 pb-3 border-4 border-bottom border-primary fw-bold">Mes compétences</h2>
            <div className="mb-2">
              <div>
                <span>HTML5 </span>
                <span>90%</span>
              </div>
            </div>
            <div className="progress mb-4">
  <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <div className="mb-2">
              <div>
                <span>CSS3 </span>
                <span>80%</span>
              </div>
            </div>
            <div className="progress mb-4">
  <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <div className="mb-2">
              <div>
                <span>JAVASCRIPT </span>
                <span>70%</span>
              </div>
            </div>
            <div className="progress mb-4">
  <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <div className="mb-2">
              <div>
                <span>PHP </span>
                <span>60%</span>
              </div>
            </div>
            <div className="progress mb-4">
  <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <div className="mb-2">
              <div>
                <span>REACT </span>
                <span>50%</span>
              </div>
            </div>
            <div className="progress mb-4">
  <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          </div>
        </div>
      </div>

      {/* GitHub modal */}
      <GitHubModal 
        show={showModal}
        handleClose={() => setShowModal(false)}
        githubData={githubData}
      />
    </div>
  );
};

export default Home; 