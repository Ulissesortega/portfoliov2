import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div className='bg2'>
      <div id='About'></div>
      <Row className='justify-content-center align-items-center vh-100'>
        <Col xs={12} md={8} className='text-center mx-3'>
          <h2 className='tf3'>About Me!</h2>
          <p className='tf4 text-justify'>
            I'm a front-end web developer with a background in 3D Design and Technical Support for computer Software and Hardware. My previous years of experience have given me a strong foundation for Web Development. <br/><br/>
            Recently, I graduated from CodeStack Academy's immersive Web Development Program, and I look forward to bring creative solutions though coding.
            <br/>
            <br/>
            As challenge as learning could be, I love to keep on learning new languagues and frameworks!
          </p>
        </Col>
      </Row>
    </div>
  );
}
