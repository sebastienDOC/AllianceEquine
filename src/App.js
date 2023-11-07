import { HashRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Rooter';
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  )
}

export default App;