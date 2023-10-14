import { useState } from 'react';
import '../App.css'
import carousel from '../data/carousel.json'
import photos from '../data/photos.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modale from '../components/Modal';

export default function Photos() {
    const [interval, setInterval] = useState(8000);
    const onChange = (index, item) => {
        setInterval(item.props["data-interval"]);
    };

    return (
        <div className="center flex-col">
            <Carousel
                onChange={onChange}
                autoPlay
                infiniteLoop={true}
                swipeable={false}
                interval={interval}
            >
                {carousel.map((data) => 
                    <img 
                        data-interval={8000}
                        key={data.id}
                        src={data.image} 
                        alt={data.image} 
                        className='img-carousel'
                    />
                )}
            </Carousel>
            <h2>Gallerie photo</h2>
            <div className='photos'>
                {photos.map((data) => 
                    <Modale 
                        key={data.id}
                        low={data.low} 
                        medium={data.medium}
                        alt={data.url} 
                    />
                )}
            </div>
        </div>
    )  
}