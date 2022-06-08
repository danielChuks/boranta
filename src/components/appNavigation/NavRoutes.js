import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from '../Pages/Index';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Navbar from './Navbar';


const  NavRoutes = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Index />}> </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </Router>
  )
}

export default NavRoutes