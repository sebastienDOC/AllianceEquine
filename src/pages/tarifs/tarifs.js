import './tarifs.css'
import pré from '../../assets/Photos Lu/pré-2.webp'

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
                        Séance individuelle 1 h 00 : 60 euros.<br/>
                        <br/>
                        Je propose également des séances collectives variant de deux à quatre personnes maximum en fonction des
                        besoins de chacun. Nous pouvons être deux praticiennes pour les séances collectives.<br/>
                        <br/>
                        Vous avez la possibilité de me joindre pour commander des bons cadeaux.
                    </p>
                </div>
                <div className='aides'>
                    <h2>Aides</h2>
                    <p>
                        Vous avez le droit de bénéficier d’aides pour financer vos séances d’équithérapie si vous êtes reconnu auprès
                        de la <strong>MDPH</strong> (Maison départementale des personnes en situation de handicap).<br/>
                        <br/>
                        De plus, certaines <strong>mutuelles</strong> prennent en charge partiellement les séances d’équithérapie car celles-ci sont
                        reconnues sous psychothérapie et médecine douce.<br/>
                        <br/>
                        Par ailleurs, certains <strong>comités d’entreprises</strong> peuvent également participer à une prise en charge des coûts
                        des séances.
                    </p>
                </div>
            </div>
        </div>
    )
}