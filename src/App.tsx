import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop'; // <- import

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop /> {/* <- scrolls to top on every route change */}
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <SEOHead 
                    title="Baraq Al Kull - Your Trusted Partner for Oilfield & Industrial Materials UAE"
                    description="Leading UAE-based trading company specializing in oilfield and industrial materials. Quality PPE, fasteners, electrical supplies, plumbing fittings, tools, and more. Reliable supply across Dubai and UAE."
                    keywords="oilfield materials UAE, industrial supplies UAE, PPE suppliers Dubai, fasteners UAE, plumbing pipe fittings UAE, electrical components supplier UAE, industrial tools Dubai, construction consumables UAE"
                    canonical="/"
                  />
                  <Home />
                </>
              } 
            />
            <Route 
              path="/about" 
              element={
                <>
                  <SEOHead 
                    title="About Baraq Al Kull - UAE Industrial Materials Trading Company"
                    description="Learn about Baraq Al Kull, a trusted UAE-based trading company dedicated to supplying high-quality oilfield and industrial materials across the region. Quality, reliability, and technical expertise."
                    keywords="Baraq Al Kull UAE, industrial materials trading company Dubai, oilfield supplies company UAE, industrial equipment supplier Dubai"
                    canonical="/about"
                  />
                  <About />
                </>
              } 
            />
            <Route 
              path="/products" 
              element={
                <>
                  <SEOHead 
                    title="Industrial Products & Materials - Baraq Al Kull UAE"
                    description="Comprehensive range of oilfield and industrial materials: PPE safety equipment, fasteners, electrical supplies, plumbing fittings, architectural materials, power tools, and consumables. UAE delivery."
                    keywords="PPE materials UAE, fasteners fittings Dubai, electrical supplies UAE, plumbing pipe fittings Dubai, power hand tools UAE, industrial consumables Dubai, safety equipment UAE"
                    canonical="/products"
                  />
                  <Products />
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <SEOHead 
                    title="Contact Baraq Al Kull - Industrial Materials Supplier UAE"
                    description="Get in touch with Baraq Al Kull for competitive quotes on oilfield and industrial materials. Located in Dubai, UAE. Call +971 XX XXX XXXX or email info@baraqalkull.com"
                    keywords="contact industrial supplier UAE, industrial materials quote Dubai, Baraq Al Kull contact Dubai, oilfield supplies contact UAE"
                    canonical="/contact"
                  />
                  <Contact />
                </>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
