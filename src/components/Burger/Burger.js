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
      <Link to='/' className="menu-item" onClick={() => handleCloseMenu()}>ACCEUIL</Link>
      <Link to='/more' className="menu-item" onClick={() => handleCloseMenu()}>EN SAVOIR PLUS</Link>
      <Link to='/about-me' className="menu-item" onClick={() => handleCloseMenu()}>QUI SUIS-JE ?</Link>
      <Link to='/photos' className="menu-item" onClick={() => handleCloseMenu()}>PHOTOS</Link>
      <Link to='/contact' className="menu-item" onClick={() => handleCloseMenu()}>CONTACT</Link>
      <a 
        href='https://www.instagram.com/lucie.imbs/' 
        target='blank'
        className="menu-item"
      >
          <img src={insta} className='insta'/>
      </a>
    </Menu>
  );
};