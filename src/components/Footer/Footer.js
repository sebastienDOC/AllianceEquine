import logo from '../../assets/Logo/logo_transparent.png'
import mail from '../../assets/Contact/mail.png'
import tel from '../../assets/Contact/tel.png'
import map from '../../assets/Contact/map.png'
import insta from '../../assets/Contact/insta.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='flex-row'>
                <img 
                    src={logo}
                    className='logo-footer'
                    alt="Logo d'Alliance Équine"
                />
                <div className='ctn'>
                    <div className='flex-col left'>
                        <a href="https://maps.app.goo.gl/7mf4iza3vCsjHja38" target="_blank" rel="noreferrer">
                            <img 
                                src={map}
                                className='img-footer'
                                alt='Icone de localisation'
                            />
                        </a>
                        <h3>Adresse</h3> 
                    </div>
                    <div className='flex-col left'>
                        <a href='mailto:alliance.equitherapie@gmail.com'>
                            <img 
                                src={mail}
                                className='img-footer'
                                alt='Icone de mail'
                            />
                        </a>
                        <h3>E-mail</h3> 
                    </div>
                    <div className='flex-col left'>
                        <a href="tel:+33785560382"> 
                            <img 
                                src={tel}
                                className='img-footer'
                                alt='Icone de téléphone'
                            />
                        </a>
                        <h3>Téléphone</h3> 
                    </div>
                    <div className='flex-col left'>
                        <a href='https://www.instagram.com/alliance_equine_/' target='blank' rel="noreferrer">
                            <img src={insta} className='insta img-footer' alt="Logo d'Instagram"/>
                        </a>
                        <h3>Instagram</h3> 
                    </div>
                </div>
            </div>
            <div className='copyright'>
                Alliance Équine • Copyright © 2023 - 2024 • Tous droits réservés.
            </div>
        </footer>
    )
}