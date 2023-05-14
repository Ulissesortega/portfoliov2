import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



export default function Contact() {
  return (
    <div className='bg3 mt-5' id='Contact'>
      <Container className=''>
        <Row>
          <Col xs={12} md={8} lg={6} xl={4} className='mx-auto'>
            <h2 className='tf2 '>Contact Me!</h2>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Label className='text-white'>NAME:</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' />
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Label className='text-white mt-3'>EMAIL</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
              </Form.Group>

              <Form.Group controlId='formMessage'>
                <Form.Label className='text-white mt-3'>MESSAGES</Form.Label>
                <Form.Control as='textarea' rows={4} placeholder='Enter your message' />
              </Form.Group>

              <Button className='rounded-pill mt-4' variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>      
    </div>
  );
}
