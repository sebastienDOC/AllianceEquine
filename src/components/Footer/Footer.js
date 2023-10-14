import logo from '../../assets/Logo/logo_transparent.png'
import mail from '../../assets/Contact/mail.png'
import tel from '../../assets/Contact/tel.png'
import map from '../../assets/Contact/map.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='flex-row'>
                <img 
                    src={logo}
                    className='logo-footer'
                />
                <div className='ctn'>
                    <img 
                        src={map}
                        className='img-footer'
                    />
                    <div className='infos'>
                        <h3>Adresse</h3> 
                        <p>86 rue de Longvic, 21000 DIJON</p>
                    </div>
                    <a href='mailto:exemple@gmail.com'>
                        <img 
                            src={mail}
                            className='img-footer'
                        />
                    </a>
                    <div className='infos'>
                        <h3>E-mail</h3> 
                        <p>allianceequine@gmail.com</p>
                    </div>
                    <img 
                        src={tel}
                        className='img-footer'
                    />
                    <div className='infos'>
                        <h3>Téléphone</h3> 
                        <p>07 85 56 03 82</p>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                Copyright © 2023 - 2024 • Tous droits réservés.
            </div>
        </footer>
    )
}