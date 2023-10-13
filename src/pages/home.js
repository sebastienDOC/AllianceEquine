import '../App.css'
import carousel from '../data/carousel.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
    return (
        <div className="center">
            <Carousel>
                {carousel.map((data) => 
                    <img 
                        src={data.image} 
                        alt={data.image} 
                        className='img-carousel'
                    />
                )}
            </Carousel>
        </div>
    )
}