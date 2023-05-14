import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';
import MyNavbar from './MyNavbar'
import Main from './Main'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';



export default function Home() {
  return (
    <div className=''>
      <MyNavbar />
      <Main/>
      <About/>
      <Skills />
      <Projects />
      <Contact />            
    </div>
  )
}

