import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyNavBar from './Components/MyNavbar'
import Home from './Components/Home';
import About from './Components/About'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
