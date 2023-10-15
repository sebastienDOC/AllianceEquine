import chevaux from '../../data/chevaux.json'
import poneys from '../../data/poneys.json'
import ModaleHorses from '../../components/Modals/ModalHorses';
import './horses.css'

export default function Horses() {
    return (
        <div className='horses-ctn'>
            <h2>LES CHEVAUX</h2>
            <div className='grid chevaux'>
                {chevaux.map((data) => 
                    <ModaleHorses 
                        key={data.id}
                        low={data.low} 
                        medium={data.medium}
                        name={data.name}
                        desc={data.desc}
                        alt={data.alt} 
                    />
                )}
            </div>
            <h2>LES PONEYS</h2>
            <div className='grid poneys'>
                {poneys.map((data) => 
                    <ModaleHorses 
                        key={data.id}
                        low={data.low} 
                        medium={data.medium}
                        name={data.name}
                        desc={data.desc}
                        alt={data.url} 
                    />
                )}
            </div>    
        </div>
        
    )
}