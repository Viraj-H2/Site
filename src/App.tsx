import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Concept from './pages/Concept';
import Error404 from './pages/Error404'
import Home from './pages/Home';
import Press from './pages/Press';
import Team from './pages/Team';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/press' element={<Press />} />
        <Route path='/team' element={<Team />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
