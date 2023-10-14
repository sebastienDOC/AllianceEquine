import logo from '../../assets/Logo/logo_transparent.png'
import insta from '../../assets/Contact/insta.png'
import './Header.css'
import { Link } from 'react-router-dom'
import Burger from '../Burger/Burger'

export default function Header() {
    return (
        <header >
            <Burger 
                pageWrapId={"page-wrap"} 
                outerContainerId={"App"} 
                right
            />
            <div className='logo-ctn' >
                <img 
                    src={logo}
                    className='logo-header'
                />
            </div>
            <nav className='nav-anchors'>
                <Link to='/'>ACCEUIL</Link>
                <Link to='/more'>EN SAVOIR PLUS</Link>
                <Link to='/about-me'>QUI SUIS-JE ?</Link>
                <Link to='/photos'>PHOTOS</Link>
                <Link to='/contact'>CONTACT</Link>
                <a href='https://www.instagram.com/lucie.imbs/' target='blank'>
                    <img src={insta} className='insta'/>
                </a>
            </nav>
        </header> 
    )
}