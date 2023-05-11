import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';



export default function Home() {
  return (
    <div className='bg1'>
      <p>Home Component</p>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

