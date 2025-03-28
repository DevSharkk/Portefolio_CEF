import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Helmet } from 'react-helmet';

// SEO
<Helmet>
  <title>John Doe - Développeur Web Full Stack</title>
  <meta name="description" content="Développeur web spécialisé en React, JavaScript et PHP. Découvrez mon portfolio et mes services." />
  <meta name="keywords" content="développeur web, portfolio, react, javascript" />
</Helmet>

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
