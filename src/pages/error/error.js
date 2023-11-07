import error from '../../assets/Photos Lu/error.webp'
import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='flex-center'>
            <div className='error-img-ctn'>
                <img 
                    src={error} 
                    className='error-img' 
                    alt='Des chevaux dans un pré devant un couché de soleil'
                />
                <div className='error-txt-ctn'>
                    <h2 className='error-txt-abs'>ERROR 404</h2>
                    <h3 className='error-txt-abs'>Oups, la page que vous recherchez n'existe pas</h3>
                    <Link to='/' className='error-txt-abs'>Revenir à la page d'accueil</Link>
                </div>
            </div>
        </div>
    )
}