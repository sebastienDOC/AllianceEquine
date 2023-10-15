import logo from '../../assets/Logo/logo_transparent.png'
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
                    alt="Logo d'Alliance Équine"
                />
            </div>
            <nav className='nav-anchors'>
                <Link to='/' className='nav'>ACCUEIL</Link>
                <Link to='/more' className='nav'>ÉQUITHÉRAPIE</Link>
                <Link to='/horses' className='nav'>NOS PARTENAIRES ÉQUINS</Link>
                <Link to='/photos' className='nav'>PHOTOS</Link>
                <Link to='/tarifs' className='nav'>TARIFS</Link>
                <Link to='/contact' className='nav'>CONTACT</Link>
            </nav>
        </header> 
    )
}