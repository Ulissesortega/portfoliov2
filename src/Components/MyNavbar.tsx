import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function MyNavBar() {
  return (
    <Container>
    <Navbar className='fixed-top' bg="dark" variant="dark">
        <Nav className="mx-auto">
          <a className="text-white LinkSpace" href="#" >HOME</a>
          <a className="text-white LinkSpace" href="#About" >ABOUT</a>
          <a className="text-white LinkSpace" href="#Skills" >SKILLS</a>
          <a className="text-white LinkSpace" href="#Project" >PROJECTS</a>
          <a className="text-white LinkSpace" href="#Contact" >CONTACT</a>
        </Nav>
    </Navbar>
    </Container>
  );
}