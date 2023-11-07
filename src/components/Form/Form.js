import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("AllianceEquine", "template_alliance_equine", form.current, "LXBWqb7aKKAacDPe4")
        .then(
          (result) => {
            if (result === 'OK') {
                <div>Hello darling</div>
            }
          },
          (error) => {
            console.log(error.text);
          }
        )
        .then(
            form.current.reset()
        )
    };

    return (
        <div className='contact-form'>
            <h2 className='test2'>FORMULAIRE DE CONTACT</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="nom">Nom : </label>
                <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    placeholder='ex: Imbs' 
                    required 
                />
                <label htmlFor="prenom">Prénom : </label>
                <input 
                    type="text" 
                    id="prenom" 
                    name="prenom" 
                    placeholder='ex: Lucie' 
                    required 
                />
                <label htmlFor="email">Email : </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"  
                    placeholder='ex: exemple@gmail.com' 
                    required 
                />
                <label htmlFor="message">Votre message : </label>
                <textarea 
                    type="textarea" 
                    id="message" 
                    name="message" 
                    placeholder='Votre message...' 
                    required 
                />
                <button 
                    type="submit" 
                    value='submit'
                >
                    Envoyer
                </button>
            </form>
        </div>
    )
}