import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Rooter';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App;