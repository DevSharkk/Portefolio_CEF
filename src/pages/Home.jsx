import React from 'react';

const Home = () => {
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
        <p>Développeur web full stack</p>
      </div>
    </div>
  );
};

export default Home; 