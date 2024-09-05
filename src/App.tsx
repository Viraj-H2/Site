import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Theme from './pages/Theme'
import Error404 from './pages/Error404'
import { isProduction } from './config/config';
import { RandomColorDebugger } from './components/RandomColorDebugger';

export default function App() {
  return (
    <Router>
      {!isProduction && <RandomColorDebugger />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {!isProduction && <Route path='/theme' element={<Theme />} />}
        {!isProduction && <Route path='/layout' element={<Layout />} />}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}
