import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Navbar from './components/Navbar';
import Allproduct from './pages/Allproduct';
import Single from './pages/Single';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Addjewellery from './dashboard/pages/Addjewellery';
import Home from './dashboard/pages/Home';
import JewelleryDetail from './pages/JewelleryDetails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/allproduct' element={<Allproduct/>}/>
          <Route path='/single' element={<Single/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/addedjewellery' element={<Addjewellery/>}/>
              <Route path="/jewellery/:id" element={<JewelleryDetail />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
