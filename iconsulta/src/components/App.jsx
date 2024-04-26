import React from 'react';
import ReactDOM from 'react-dom';
import '/src/components/index.css';
import Home from '/src/components/Home';
import Testimonial from '/src/components/Testimonial';
import Services from '/src/components/Services';
import { Footer } from '/src/components/Footer';
import Feature from '/src/components/Feature';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Services />
    <Feature />
    <Testimonial />
    <Footer />
  </React.StrictMode>,
)


