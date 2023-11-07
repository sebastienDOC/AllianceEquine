import './Modal.css'
import ModalImage from "react-modal-image";

export default function Modal({ small, large, alt }) {
    return (
        <ModalImage
            small={small}
            large={large}
            alt={alt}
            className='photos-img'
            hideDownload
            hideZoom
        />
    )
};