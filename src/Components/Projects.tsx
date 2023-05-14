import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

export default function Projects() {
  return (
    <div className='bg2 mt-5' id='Project'>
      <div id='About'><br/><br/></div>
      
      <Container className="project-container">
      <h2 className='tf3 text-center mt-5'>Projects!</h2>

        <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          <Col>
            <Card className="project-card">
              <Card.Img variant="top" src={require('../Assets/PR.jpg')} />
              <Card.Body>
                <Card.Title>Puppy Restaurant</Card.Title>
                <Card.Text>
                  Stactic Fully Responsive HTML, CSS Website
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button className='rounded-pill' variant="secondary" href="https://ulissesortega.github.io/OrtegaUPR/" target="_blank">Live Demo</Button>
                  <Button className='rounded-pill' variant="primary" href="https://github.com/Ulissesortega/OrtegaUPR" target="_blank">Repo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="project-card">
            <Card.Img variant="top" src={require('../Assets/Project2.jpg')} />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Description of project 2.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button className='rounded-pill' variant="secondary" href="https://ulissesortega.github.io/OrtegaUProjectRedesign/index.html" target="_blank">Live Demo</Button>
                  <Button className='rounded-pill' variant="primary" href="https://github.com/Ulissesortega/OrtegaUProjectRedesign" target="_blank">Repo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="project-card">
              <Card.Img variant="top" src="project3-image.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Description of project 3.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button className='rounded-pill' variant="secondary" href="project3-demo-link" target="_blank">Live Demo</Button>
                  <Button className='rounded-pill' variant="primary" href="project3-repo-link" target="_blank">Repo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Add more project cards here as needed */}
        </Row>
      </Container>
      
    </div>
  );
}
