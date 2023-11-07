import { useState } from 'react';
import './photos.css'
import carousel from '../../data/carousel.json'
import photos from '../../data/photos.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from '../../components/Modal/Modal';

export default function Photos() {
    const [isOpen, setIsOpen] = useState(false);
    const [interval, setInterval] = useState(5000);
    const onChange = (index, item) => {
        setInterval(item.props["data-interval"]);
    };
    function getImgCover(img) {
        let images = require("../../assets" + img);
        return images;
    }

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
                        data-interval={5000}
                        key={data.id}
                        src={getImgCover(data.image)} 
                        alt={data.titre} 
                        className='img-carousel'
                    />
                )}
            </Carousel>
            <h2>Galerie photos</h2>
            <div className='photos'>
                {photos.map((data) => 
                    <Modal 
                        key={data.id}
                        small={getImgCover(data.low)} 
                        large={getImgCover(data.medium)} 
                        alt={data.alt} 
                    />
                )}
            </div>
        </div>
    )  
}