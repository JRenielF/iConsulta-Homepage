import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home';
import Header from './Header';
import Testimonial from './Testimonial';
import Services from './Sevices';
import { Footer } from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Header />
    <Testimonial />
    <Services />
    <Footer />
  </React.StrictMode>,
)
