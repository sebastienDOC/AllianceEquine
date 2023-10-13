import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Error from '../pages/error';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}