import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar bg="primary" variant="dark" className="footer">
      <Container className="text-white text-center">
        <Navbar.Brand className="mx-auto" style={{ fontStyle: 'italic' }}>
          Email: Ulisses.ortega@hotmail.com | Phone: 925.329.2650
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
