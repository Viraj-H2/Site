import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Careers from '../pages/careers/Careers';
import Concept from '../pages/Concept';
import Error404 from '../pages/Error404'
import Home from '../pages/home/Home';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/concept' element={<Concept />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    )
}
