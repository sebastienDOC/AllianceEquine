import ModalImage from "react-modal-image";
import '../App.css'

export default function Modale({ low, medium, alt }) {
	
	return (
        <ModalImage
            className='photos-img'
            small={low}
            medium={medium}
            alt={alt}
        />
	)
}