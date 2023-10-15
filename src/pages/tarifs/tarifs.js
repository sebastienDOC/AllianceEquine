import './tarifs.css'
import pré from '../../assets/Photos/pré-2.jpg'

export default function Tarifs() {
    return (
        <div className='tarifs-ctn'>
            <img 
                src={pré} 
                alt='Un troupeau de chevaux blancs dans un pré'
                className='tarifs-img'
            />
            <div className='tarifs-flex'>
                <div className='tarifs'>
                    <h2>Tarifs</h2>
                    <p>
                        <div>Séance individuelle 1h : 60 €.</div> 
                        <div>Séance de groupe (max 4 personnes) 1h30 : 150 € pour le groupe. </div>
                        <br/>
                        Nous sommes deux praticiennes pour les séances de groupes.<br/>
                        Vous avez la possibilité de me joindre pour commander des bons cadeaux.
                    </p>
                </div>
                <div className='aides'>
                    <h2>Aides</h2>
                    <p>
                        Les séances d’équithérapie font partie d’une psychothérapie assistée par le cheval,<br/> 
                        et sont donc partiellement prises en charge par certaines mutuelles.<br/>
                        <br/>
                        Par ailleurs, toute personne souffrant d’un handicap reconnu auprès de la MDPH <br/>
                        (Maison départementale des personnes en situation de handicap), <br/>
                        peut être éligible à une prise en charge totale des coûts des séances. 
                    </p>
                </div>
            </div>
        </div>
    )
}