import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Addjewellery from './Addjewellery';

const Home = () => {
  return (
    <div>
        <Routes>
          
          
          <Route path='/dashboard/addedjewellery' element={<Addjewellery/>}/>

        </Routes>
    </div>
  )
}

export default Home
