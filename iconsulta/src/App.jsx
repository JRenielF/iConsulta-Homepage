import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home';
import Testimonial from './Testimonial';
import Services from './Services';
import { Footer } from './Footer';
import Feature from './Feature';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Services />
    <Feature />
    <Testimonial />
    <Footer />
  </React.StrictMode>,
)


