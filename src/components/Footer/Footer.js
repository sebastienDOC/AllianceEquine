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
                    <div className='flex-row left'>
                        <a href="http://maps.google.com/maps?q=loc:47.308473392217174,5.048602497223575" target="_blank">
                            <img 
                                src={map}
                                className='img-footer'
                                alt='Icone de localisation'
                            />
                        </a>
                        <div className='infos'>
                            <h3>Adresse</h3> 
                            <p>86 rue de Longvic, 21000 DIJON</p>
                        </div>
                    </div>
                    <div className='flex-row left'>
                        <a href='mailto:allianceequine@gmail.com'>
                            <img 
                                src={mail}
                                className='img-footer'
                                alt='Icone de mail'
                            />
                        </a>
                        <div className='infos'>
                            <h3>E-mail</h3> 
                            <p>allianceequine@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex-row left'>
                        <a href="tel:+33785560382"> 
                            <img 
                                src={tel}
                                className='img-footer'
                                alt='Icone de téléphone'
                            />
                        </a>
                        <div className='infos'>
                            <h3>Téléphone</h3> 
                            <p>07 85 56 03 82</p>
                        </div>
                    </div>
                    <a href='https://www.instagram.com/lucie.imbs/' target='blank' rel="noreferrer">
                        <img src={insta} className='insta yo' alt="Logo d'Instagram"/>
                    </a>
                </div>
            </div>
            <div className='copyright'>
                Copyright © 2023 - 2024 • Tous droits réservés.
            </div>
        </footer>
    )
}