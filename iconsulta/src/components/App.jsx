import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Testimonial from './Testimonial';
import Services from './Services';
import { Footer } from './Footer';
import Feature from './Feature';
import Navbar from './Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Services />
    <Feature />
    <Testimonial />
    <Footer />
  </React.StrictMode>,
)


