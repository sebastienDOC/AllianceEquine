import './tarifs.css'
import vignes from '../../assets/Photos Lu/vignes.webp'

export default function Tarifs() {
    return (
        <div className='tarifs-ctn'>
            <img 
                src={vignes} 
                alt='Un troupeau de chevaux blancs dans un pré'
                className='tarifs-img'
            />
            <div className='tarifs-flex'>
                <div className='tarifs'>
                    <h2>Tarifs</h2>
                    <p>
                        Séance individuelle 1 h 00 : <strong>60 euros</strong><br/>
                        <br/>
                        Séance collective 1 h 30 (3-4 pers) : <strong>150 euros</strong><br/>
                        <br/>
                        Vous avez la possibilité de me joindre pour demander un devis ou commander des bons cadeaux.
                    </p>
                </div>
                <div className='aides'>
                    <h2>Aides</h2>
                    <p>
                        Vous avez le droit de bénéficier d’aides pour financer vos séances d’équithérapie si vous êtes reconnu auprès
                        de la <strong>MDPH</strong> (Maison départementale des personnes en situation de handicap).<br/>
                        <br/>
                        <br/>
                        De plus, certaines <strong>mutuelles</strong> prennent en charge partiellement les séances d’équithérapie car celles-ci sont
                        reconnues sous psychothérapie et médecine douce.<br/>
                        <br/>
                        <br/>
                        Par ailleurs, certains <strong>comités d’entreprises</strong> peuvent également participer à une prise en charge des coûts
                        des séances.
                    </p>
                </div>
            </div>
        </div>
    )
}