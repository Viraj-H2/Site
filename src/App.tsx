import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Concept from './pages/Concept';
import Error404 from './pages/Error404'
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import News from './pages/News';
import Careers from './pages/Careers';
import Team from './pages/Team';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
