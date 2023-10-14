import './home.css'
import Lu from '../../assets/Photos/Lu_5.jpg'

export default function Home() {
    return (
        <div className='flex'>
            <div className='home-txt'>
                <h1>thérapie par le cheval</h1>
                <h2>UN SOIN PSYCHIQUE, CORPOREL ET SENSORIEL</h2>
                <p>
                    L’équithérapie est un soin psychique, corporel et sensoriel qui s’appuie sur la relation avec le cheval, l'âne ou le poney. <br />
                    <br />
                    Il ne s'agit ni d'un sport, ni d'un loisir adapté même si l'aspect ludique est une aide précieuse. <br />
                    <br />
                    C'est un travail sur soi accompagné par un thérapeute spécifiquement formé et diplômé qui met ses compétences relationnelles et ses connaissances du cheval 
                    au service d’un  espace thérapeutique atypique. <br />
                    <br />
                    Les prises en charge peuvent être individuelles ou de groupe (si les objectifs sont communs ou si le travail s'oriente vers la socialisation). <br />
                    <br />
                    Le travail est toujours proposé en fonction de la personne et des  objectifs thérapeutiques établis dans un projet de prise en charge individualisé.
                </p>
            </div>
            <img 
                src={Lu} 
                alt='Lucie embrassant son cheval'
                className='home-img'
            />
        </div>
    )
}