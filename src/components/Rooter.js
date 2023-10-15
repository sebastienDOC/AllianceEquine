import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import More from '../pages/more/more';
import About from '../pages/about/about';
import Photos from '../pages/photos/photos';
import Horses from '../pages/horses/horses';
import Error from '../pages/error/error';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more" element={<More />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/horses" element={<Horses />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}