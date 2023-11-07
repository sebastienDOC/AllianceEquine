import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import insta from '../../assets/Contact/insta.png'
import './Burger.css'
import { useState } from "react";

export default function Burger(){
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  
  return (
    <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}> 
      <Link to='/' className="menu-item" onClick={() => handleCloseMenu()}>ACCUEIL</Link>
      <Link to='/more' className="menu-item" onClick={() => handleCloseMenu()}>ÉQUITHÉRAPIE</Link>
      <Link to='/horses' className="menu-item" onClick={() => handleCloseMenu()}>NOS PARTENAIRES ÉQUINS</Link>
      <Link to='/photos' className="menu-item" onClick={() => handleCloseMenu()}>PHOTOS</Link>
      <Link to='/tarifs' className="menu-item" onClick={() => handleCloseMenu()}>TARIFS</Link>
      <Link to='/contact' className="menu-item" onClick={() => handleCloseMenu()}>CONTACT</Link>
      <a 
        href='https://www.instagram.com/alliance_equine_/' 
        target='blank'
        className="menu-item"
        rel="noreferrer"
      >
          <img src={insta} className='insta yo'/>
      </a>
    </Menu>
  );
};