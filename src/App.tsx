import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { HashLink as Hlink } from 'react-router-hash-link'

import MyNavBar from './Components/MyNavbar'
import Home from './Components/Home';
import About from './Components/About'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
