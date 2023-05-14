import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGitSquare } from "react-icons/fa";


export default function Main() {
  return (
    <div className='bg1 d-flex justify-content-center align-items-center' id="Main">
      <Row className='loc'>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <img src={require('../Assets/UlisesProfile2.png')} alt="Logo" className="img-fluid br" width={350} />
        </Col>
        <Col xs={12} lg={6} className="text-center">
          <p className='tf2'>Ulises Ortega</p>
          <p className='tf3'>Jr. Web Developer</p>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <Button className='rounded-pill btncolor'>RESUME</Button>
            <Button variant="link" href="https://www.linkedin.com/in/uortega" target="_blank" className="mr-3">
              <FaLinkedin className='icon1' size={45} />
            </Button>
            <Button variant="link" href="https://github.com/Ulissesortega?tab=repositories" target="_blank">
              <FaGitSquare className='icon2 mr-4' size={45} />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
