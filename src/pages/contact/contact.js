import './contact.css'
import mail from '../../assets/Contact/mail_2.png'
import tel from '../../assets/Contact/tel_2.png'
import map from '../../assets/Contact/map_2.png'
import insta from '../../assets/Contact/insta_2.png'
import Form from '../../components/Form/Form'

export default function Contact() {
    return (
        <div className='contact-ctn'>
            <div className='contact-txt'>
                <div className='contact-horaires'>
                    <h2>HORAIRES</h2>
                    <h3>Lundi – Vendredi</h3>
                    <p>9:00 – 18:00</p>
                    <h3>Samedi</h3>
                    <p>Uniquement sur rendez-vous</p>
                    <h3>Dimanche</h3>
                    <p>Fermé</p>
                </div>
                <div className='contact-us'>
                    <h2>CONTACTEZ-NOUS</h2>
                    <h3>Adresse: </h3>
                    <p>Gevrey-Chambertin, Bourgogne-Franche-Comté</p>
                    <br />
                    <h3>E-mail: </h3>
                    <p>alliance.equitherapie@gmail.com</p>
                    <br />
                    <h3>Téléphone: </h3>
                    <p>07 85 56 03 82</p>
                    <br />
                    <div className='contact-icons'>
                        <a href="https://maps.app.goo.gl/evYoZK13awR49ecB6" target="_blank" rel="noreferrer">
                            <img 
                                src={map}
                                className='img-footer'
                                alt='Icone de localisation'
                            />
                        </a> 
                        <a href='mailto:alliance.equitherapie@gmail.com'>
                            <img 
                                src={mail}
                                className='img-footer'
                                alt='Icone de mail'
                            />
                        </a>
                        <a href="tel:+33785560382"> 
                            <img 
                                src={tel}
                                className='img-footer'
                                alt='Icone de téléphone'
                            />
                        </a>
                        <a href='https://www.instagram.com/lucie.imbs/' target='blank' rel="noreferrer">
                            <img src={insta} className='insta yo img-footer'  alt="Logo d'Instagram"/>
                        </a>
                    </div>
                </div>
                
            </div>
            <Form />
        </div>
    )
}