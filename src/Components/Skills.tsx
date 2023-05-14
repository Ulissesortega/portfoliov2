import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGitSquare, FaHtml5, FaCss3, FaBootstrap, FaWind, FaJs, FaReact, FaCode, FaFigma, FaProjectDiagram, FaMicrochip } from "react-icons/fa";


export default function Skills() {
  return (
    <div className='bg1' id='Skills'>
      <div id='About'><br /><br /></div>
      <Container>
        <Row>
          <Col>
            <h2 className='tf2 text-center mt-5'>My Skills!</h2>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                <FaHtml5 className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>HTML</p>
            </button>
          </Col>


          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <FaCss3 className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>CSS</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">
                <FaBootstrap className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>BOOTSTRAP</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://tailwindcss.com/docs/guides/create-react-app" target="_blank">
                <FaWind className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>BOOTSTRAP</p>
            </button>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className='img-button'>
                <FaJs className='icon3' size={100} />
                <p className='text-white mt-2'>JAVASCRIPT</p>
              </a>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaReact className='icon3' size={100} />
              <p className='text-white mt-2'>REACT</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaHtml5 className='icon3' size={100} />
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaHtml5 className='icon3' size={100} />

            </button>
          </Col>
        </Row>

        <Row className='mt-5'>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaCode className='icon3' size={100} />
              <p className='text-white mt-2'>VS CODE</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaFigma className='icon3' size={100} />
              <p className='text-white mt-2'>FIGMA</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaProjectDiagram className='icon3' size={100} />
              <p className='text-white mt-2'>GITHUB</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button' onClick={() => { }}>
              <FaMicrochip className='icon3' size={100} />
              <p className='text-white mt-2'>CHAT GPT</p>
            </button>
          </Col>
        </Row>

      </Container>
    </div >
  );
}
