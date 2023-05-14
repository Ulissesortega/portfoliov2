import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGitSquare, FaHtml5, FaCss3, FaBootstrap, FaWind, FaJs, FaReact, FaCode, FaFigma, FaProjectDiagram, FaMicrochip, FaHashtag } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJavascript,SiOpenai } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { SlSocialGithub } from 'react-icons/sl';


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
                <SiTailwindcss className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>TAILWIND</p>
            </button>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <SiJavascript className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>JAVASCRIPT</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://react.dev/learn" target="_blank">
                <FaReact className="icon3" size={100} />
              </a>
              <p className='text-white mt-2'>REACT</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank">
                <FaHashtag className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>CSHARP</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://www.typescriptlang.org/docs/" target="_blank">
                <SiTypescript className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>TYPESCRIPT</p>
            </button>
          </Col>
        </Row>

        <Row className='mt-5'>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://code.visualstudio.com/docs" target="_blank">
                <TbBrandVscode className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>CSHARP</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://help.figma.com/hc/en-us/categories/360002051613" target="_blank">
                <FaFigma className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>FIGMA</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://docs.github.com/en" target="_blank">
                <SlSocialGithub className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>GITHUB</p>
            </button>
          </Col>

          <Col xs={6} md={3} className='d-flex justify-content-center'>
            <button className='img-button'>
              <a href="https://openai.com/product/gpt-4" target="_blank">
                <SiOpenai className='icon3' size={100} />
              </a>
              <p className='text-white mt-2'>CHAT GPT</p>
            </button>
          </Col>
        </Row>

      </Container>
    </div >
  );
}
