import ModalImage from "react-modal-image";

export default function ModalePhotos({ low, medium, alt }) {
	
	return (
        <ModalImage
            className='photos-img'   
            small={low}
            medium={medium}
            alt={alt}
        />
	)
}