import './App.css';
import TextInput from './TextInput';
import CharCout from './CharCout';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './components/Pages/Index';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact';
import Navbar from './components/appNavigation/Navbar';

const App = () => {
  return (
         <main>
            <Router>
              <Navbar />
                <Routes>
                    <Route path='/' element={<Index />}> </Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </Router>
         </main>
  );
}

export default App;
