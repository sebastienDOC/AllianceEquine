import './home.css'
import Lu_8 from '../../assets/Photos Lu/A pied/low/Lu_8.webp'
import Lu_5 from '../../assets/Photos Lu/A pied/low/Lu_5.webp'

export default function Home() {
    return (
        <div className='home'>
            <h1>Bienvenue chez Alliance Équine</h1>
            <div className='flex'>
                <div className='home-txt'>
                    <h2>Qui suis-je ?</h2>
                    <p>
                    Je m’appelle Lucie Imbs, je suis éducatrice formée à l’EDIAC Formations Strasbourg et praticienne en équithérapie formée à Ipocampus. <br />
                        <br />
                        Depuis mon plus jeune âge les chevaux ont été à mes côtés pour m’accompagner et me soutenir dans les différentes étapes de ma vie. <br/>
                        C’est auprès de ces compagnons dotés de cette grande qualité, celle de ne
                        jamais juger, que j’ai trouvé de la sérénité, de la générosité et de l’écoute. <br />
                        <br />
                        J’ai appris à comprendre et à prendre soin de ces partenaires avec respect, fascinée par la relation que nous
                        pouvons construire avec eux. Aujourd’hui, les chevaux sont devenus mes coéquipiers avec lesquels je
                        souhaite proposer des temps offrant à chaque personne un espace de parole, d’écoute et de confidentialité.<br />
                        Un espace dans un cadre apaisant pour évoluer à son propre rythme et avoir la possibilité d’être acteur
                        auprès des chevaux.
                    </p>
                </div>
                <img 
                    src={Lu_8} 
                    alt='Lucie fait un câlin à son cheval brun'
                    className='home-img img-pos img-center'
                />
            </div>
            <div className='flex reverse'>
                <img 
                    src={Lu_5} 
                    alt='Lucie embrasse son cheval blanc'
                    className='home-img img-pos marg'
                />
                <div className='home-txt'>
                    <h2>Notre environnement</h2>
                    <p>
                        Nous sommes localisés à Gevrey-Chambertin, en Côte d’Or, offrant un joli cadre propice à la détente. Les
                        chevaux vivent dans un pré et en groupe pour favoriser leur bien être mental.<br/>
                        <br/>
                        Nous bénéficions d’un espace couvert pour pratiquer les séances à l’abri. Les personnes accompagnantes
                        peuvent profiter d’un espace d’attente couvert avec du thé et du café.<br/>
                        <br/>
                        Nous disposons également de toilettes.
                    </p>
                </div>
            </div>
        </div>
    )
}