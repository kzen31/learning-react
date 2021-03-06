import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Header';
import Footer from './Footer';
import MainComponent from './MainComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainComponent />
    <Footer />
  </React.StrictMode>
);
