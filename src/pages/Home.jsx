import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GitHubModal from '../components/GitHubModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const githubData = {
    name: "John Doe",
    login: "github-johndoe",
    avatar_url: "https://avatars.githubusercontent.com/u/1234567",
    bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
    public_repos: 1,
    followers: 16,
    following: 0,
    location: null,
    blog: null,
    html_url: "https://github.com/github-johndoe"
  };

  return (
    <div className="hero-section" style={{
      backgroundImage: 'url("/images/hero-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="overlay"></div>
      <div className="hero-content text-white text-center">
        <h1>Bonjour, je suis John Doe</h1>
        <h2 className="mb-4">Développeur web full stack</h2>
        <Button 
          type="button" 
          className="btn btn-danger"
          size="lg" 
          onClick={() => setShowModal(true)}
        >
          En savoir plus
        </Button>
      </div>

      <GitHubModal 
        show={showModal}
        handleClose={() => setShowModal(false)}
        githubData={githubData}
      />
    </div>
  );
};

export default Home; 