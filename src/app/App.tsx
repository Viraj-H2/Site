import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Blog from '../pages/blog/Blog';
import Careers from '../pages/careers/Careers';
import Concept from '../pages/Concept';
import Error404 from '../pages/Error404'
import Home from '../pages/home/Home';
import Team from '../pages/team/Team';
import BlogPost from '../pages/blog/components/BlogPost';
import { PostsProvider } from '../pages/blog/providers/PostsProvider';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/team' element={<Team />} />
        <Route path='/careers' element={<Careers />} />
        <Route path="/blog" element={<PostsProvider><Blog /></PostsProvider>} />
        <Route path="/blog/:title" element={<PostsProvider><BlogPost /></PostsProvider>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
