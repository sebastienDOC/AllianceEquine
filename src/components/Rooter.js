import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import More from '../pages/more/more';
import Photos from '../pages/photos/photos';
import Horses from '../pages/horses/horses';
import Tarifs from '../pages/tarifs/tarifs';
import Contact from '../pages/contact/contact';
import Error from '../pages/error/error';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more" element={<More />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/horses" element={<Horses />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}