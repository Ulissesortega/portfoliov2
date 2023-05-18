import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar bg="primary" variant="dark" className="footer">
      <Container className="text-white text-center">
        <Navbar.Brand className="mx-auto" style={{ fontStyle: 'italic' }}>
          <span className="d-block d-sm-inline">Email: Ulisses.ortega@hotmail.com</span>
          <span className="d-sm-none">Phone: 925.329.2650</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
