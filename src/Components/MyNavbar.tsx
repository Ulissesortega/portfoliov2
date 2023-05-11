import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link className="text-white" href="#home" as={Link} to='/Home'>HOME</Nav.Link>
          <Nav.Link className="text-white" href="#About" as={Link} to='/About'>ABOUT</Nav.Link>
          <Nav.Link className="text-white" href="#Skills" as={Link} to='/Skills'>SKILLS</Nav.Link>
          <Nav.Link className="text-white" href="#Project" as={Link} to='/Projects'>PROJECTS</Nav.Link>
          <Nav.Link className="text-white" href="#Contact" as={Link} to='/Contact'>CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}