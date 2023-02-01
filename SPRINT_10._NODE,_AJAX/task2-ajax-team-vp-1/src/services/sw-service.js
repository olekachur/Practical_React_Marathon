import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import People from '../components/People/People';
import Planets from '../components/Planets/Planets';
import Starships from '../components/Starships/Starships';
import Header from '../components/Header/Header';

export default function SwService() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<People />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='/ptarships' element={<Starships />} />
            </Routes>
        </Router>
    )
}
