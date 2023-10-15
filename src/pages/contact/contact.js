import './contact.css'
import mail from '../../assets/Contact/mail_2.png'
import tel from '../../assets/Contact/tel_2.png'
import map from '../../assets/Contact/map_2.png'
import insta from '../../assets/Contact/insta_2.png'

export default function Contact() {
    return (
        <div className='contact-ctn'>
            <div className='contact-txt'>
                <div className='contact-horaires'>
                    <h2>HORAIRES</h2>
                    <h4>
                        Lundi – Vendredi <br/>
                        9:00 – 18:00
                    </h4>
                    <h4>
                        Samedi - Dimanche <br/>
                        Fermé
                    </h4>
                </div>
                <div className='contact-us'>
                    <h2>CONTACTEZ-NOUS</h2>
                    <h4>Adresse: 86 rue de Longvic, 21000 DIJON</h4>
                    <h4>E-mail: allianceequine@gmail.com</h4>
                    <h4>Téléphone: 07 85 56 03 82</h4>
                    <div className='contact-icons'>
                        <a href='https://www.instagram.com/lucie.imbs/' target='blank'>
                            <img src={insta} className='insta yo img-footer'  alt="Logo d'Instagram"/>
                        </a>
                        <a href="http://maps.google.com/maps?q=loc:47.308473392217174,5.048602497223575" target="_blank">
                            <img 
                                src={map}
                                className='img-footer'
                                alt='Icone de localisation'
                            />
                        </a> 
                        <a href='mailto:allianceequine@gmail.com'>
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
                    </div>
                </div>
                
            </div>
            <div className='contact-form'>
                    <h2 className='test2'>FORMULAIRE DE CONTACT</h2>
                    <form>
                        <label for="nom">Nom : </label>
                        <input type="text" id="nom" name="nom" placeholder='ex: Imbs' required />
                        <label for="prénom">Prénom : </label>
                        <input type="text" id="prénom" name="prénom" placeholder='ex: Lucie' required />
                        <label for="email">Email : </label>
                        <input type="text" id="email" name="email"  placeholder='ex: exemple@gmail.com' required />
                        <label for="area">Votre message : </label>
                        <textarea type="textarea" id="area" name="area" placeholder='' required />
                        <button type="submit">Envoyez</button>
                    </form>
                </div>
        </div>
    )
}