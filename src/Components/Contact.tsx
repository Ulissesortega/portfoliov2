import React, { useRef, SyntheticEvent } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_h3iihre', 'template_7rszajh', form.current, 'auz6aMlDQwVldaDBN')
        .then((result) => {
          console.log(result.text);
          toast.success('Email has been sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        })
        .catch((error) => {
          console.log(error.text);
        });

      form.current.reset();
    }
  };

  return (
    <div className='bg3 mt-5' id='Contact'>
      <Container>
        <Row>
          <Col xs={12} md={8} lg={6} xl={4} className='mx-auto'>
            <h2 className='tf2'>Contact Me!</h2>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId='formName'>
                <Form.Label className='text-white'>NAME:</Form.Label>
                <Form.Control type='text' name='user_name' placeholder='Enter your name' required />
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Label className='text-white mt-3'>EMAIL</Form.Label>
                <Form.Control type='email' name='user_email' placeholder='Enter your email' required />
              </Form.Group>

              <Form.Group controlId='formMessage'>
                <Form.Label className='text-white mt-3'>MESSAGES</Form.Label>
                <Form.Control
                  as='textarea'
                  name='message'
                  rows={4}
                  placeholder='Enter your message'
                  required
                />
              </Form.Group>

              <Button className='rounded-pill mt-4' variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Contact;
