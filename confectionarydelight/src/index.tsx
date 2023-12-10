import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Navigation from './navigation';
import Home from './home';
import Menu from './menu';
import About from './about';
import Contact from './contact';
import FooterSection from './footersection';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
    <Navigation />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    <FooterSection />
  </Router>
  </StrictMode>
);