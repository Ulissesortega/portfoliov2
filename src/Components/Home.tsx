import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import About from './About';



export default function Home() {
  return (
    <div>
      <p>Home Component</p>
      <About />
    </div>
  )
}

