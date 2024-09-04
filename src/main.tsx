import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './scss/index.scss'
import Theme from './pages/Theme';
import Error404 from './pages/Error404';

const isProduction = import.meta.env.PROD;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {!isProduction && <Route path='/theme' element={<Theme />} />}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  </StrictMode>
)
