import logo from '../../assets/Logo/logo_transparent.png'
import insta from '../../assets/Contact/insta.png'
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className='logo-ctn'>
                <img 
                    src={logo}
                    className='logo-header'
                />
            </div>
            <nav className='nav-anchors'>
                <a>ACCEUIL</a>
                <a>EN SAVOIR PLUS</a>
                <a>QUI SUIS-JE ?</a>
                <a>ARTICLE</a>
                <a>CONTACT</a>
                <a href='https://www.instagram.com/lucie.imbs/' target='blank'>
                    <img src={insta} className='insta'/>
                </a>

            </nav>
        </div>

        
    )
}