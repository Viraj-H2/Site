import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Concept from './pages/Concept';
import Error404 from './pages/Error404'
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import News from './pages/News';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
