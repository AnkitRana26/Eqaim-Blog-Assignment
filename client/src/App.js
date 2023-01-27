import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog/Blog';
import CreateBlog from './pages/CreateBlog/CreateBlog';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
    </Routes>
    </>
  );
}

export default App;
