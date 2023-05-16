import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function MyNavBar() {
  return (
    <Container>
    {/* <Navbar className='fixed-top' bg="primary" variant="dark">
        <Nav className="mx-auto">
          <a className="text-white LinkSpace" href="#" >HOME</a>
          <a className="text-white LinkSpace" href="#About" >ABOUT</a>
          <a className="text-white LinkSpace" href="#Skills" >SKILLS</a>
          <a className="text-white LinkSpace" href="#Project" >PROJECTS</a>
          <a className="text-white LinkSpace" href="#Contact" >CONTACT</a>
        </Nav>
    </Navbar> */}
     <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary" fixed="top"  >
      <Container>
        <Navbar.Brand href="#Main" className='d-block d-sm-none'></Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto tf5">
            <Nav.Link className="text-white" href="#Main">HOME</Nav.Link>
            <Nav.Link className="text-white" href="#About">ABOUT</Nav.Link>
            <Nav.Link className="text-white" href="#Skills">SKILLS</Nav.Link>
            <Nav.Link className="text-white" href="#Project">PROJECTS</Nav.Link>
            <Nav.Link className="text-white" href="#Contact">CONTACT</Nav.Link>         
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Container>
    
  );
}



