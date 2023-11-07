// import chevaux from '../../data/chevaux.json'
// import poneys from '../../data/poneys.json'
import './horses.css'
import nez from '../../assets/Photos Lu/nez.webp'

export default function Horses() {
    return (
        // <div className='horses-ctn'>
        //     <h2>LES CHEVAUX</h2>
        //     <div className='grid chevaux'>
        //         {chevaux.map((data) => 
        //             <img 
        //                 key={data.id}
        //                 src={data.low} 
        //                 name={data.name}
        //                 desc={data.desc}
        //                 alt={data.alt} 
        //             />
        //         )}
        //     </div>
        //     <h2>LES PONEYS</h2>
        //     <div className='grid poneys'>
        //         {poneys.map((data) => 
        //             <img 
        //                 key={data.id}
        //                 src={data.low} 
        //                 name={data.name}
        //                 desc={data.desc}
        //                 alt={data.url} 
        //             />
        //         )}
        //     </div>    
        // </div>
        <div className='horses-ctn'>
            <img src={nez} alt='Des chevaux tranquilles dans un pré' className='horses-wait-img'/>
            <div className='horses-wait-txt'>
                <h2>BIENTÔT DISPONIBLE</h2>
                <h3>Cette page est actuellement en cours de création</h3>
                <p>Notre site web fait actuellement l'objet d'une maintenance.</p>
                <p>Cette page devrait être de retour sous peu.</p>
                <p>Nous vous remercions de votre patience.</p>
            </div>
        </div>
    )
}