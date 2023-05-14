import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';


export default function Main() {
  return (
    <div className='bg1 d-flex justify-content-center align-items-center' id="Main">
      <Row className='loc'>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <img src={require('../Assets/mando.jpeg')} alt="Logo" className="img-fluid br" width={450} />
        </Col>
        <Col xs={12} lg={6} className="text-center">
          <p className='tf2'>Ulises Ortega</p>
          <p className='tf3'>Jr. Web Developer</p>
          <div className="d-flex align-items-center justify-content-center">
            <Button className='mr-3'>RESUME</Button>
            <Button variant="link" href="https://www.linkedin.com/in/uortega" target="_blank">
              <img src={require('../Assets/LinkedIn.png')} alt="LinkedIn" className="img-fluid" width={45} />
            </Button>
            <Button variant="link" href="https://github.com/Ulissesortega?tab=repositories" target="_blank">
              <img src={require('../Assets/GitHub.jpg')} alt="GitHub" className="img-fluid" style={{ borderRadius: '10%' }} width={45} />
            </Button>
            <FaLinkedin aria-label="Link to Alex's LinkedIn page." />

          </div>
        </Col>
      </Row>
    </div>
  );
}
