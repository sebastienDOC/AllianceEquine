import ModalImage from "react-modal-image";

export default function ModaleHorses({ low, medium, alt, name, desc }) {
	
	return (
        <div>
            <ModalImage
                className='photos-img horses'   
                small={low}
                medium={medium}
                alt={alt}
            />
            <h3>{name}</h3>
            <h4>{desc}</h4>
        </div>
	)
}