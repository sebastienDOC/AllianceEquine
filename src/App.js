import React from 'react';
import Over from './components/Over/Over';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Rooter';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Over />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App;