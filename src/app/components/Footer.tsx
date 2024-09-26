import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const links = [
    { to: '/', text: 'Accueil' },
    { to: '/concept', text: 'Notre concept' },
    { to: '/team', text: "L'équipe" },
    { to: '/careers', text: 'Carrières' },
    { to: '/blog', text: 'Blog' }
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <footer className='py-4 border-top'>
      <Container>
        <Row className='m-0 justify-content-evenly'>
          <Col className='mb-3'>
            <h5 className='text-uppercase mb-3'>Coordonnées</h5>
            <Row>
              <Col xs={1} className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
              </Col>
              <Col className='d-flex align-items-center'>
                <address>
                  <b>Viraj H2</b><br />
                  10 Avenue Edouard Belin<br />
                  31400 Toulouse<br />
                  France
                </address>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='me-2' />
              </Col>
              <Col className='d-flex align-items-center'>
                <a href='mailto:contact@viraj-h2.com' className='text-decoration-none'>
                  <b>contact@viraj-h2.com</b>
                </a>
              </Col>
              </Row>
          </Col>

          <Col>
            <h5 className='text-uppercase mb-3'>LIENS</h5>
            <Nav className='flex-column'>
              {links.map((link) => (
                <Nav.Item key={link.to} className="mb-2">
                  <Nav.Link as={Link} to={link.to} className="p-0 text-body-secondary">
                    {link.text}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          <Col sm={4} className='min-width-col'>
            <h5 className='text-uppercase mb-3'>Newsletter</h5>
            <p>Restez informé de nos dernières actualités</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='d-flex flex-wrap align-items-start m-0'>
                <Col xs={12} md='auto' className='mt-1 flex-grow-1 p-1'>
                  <Form.Group controlId='newsletter-email'>
                    <Form.Control type='email' placeholder='Adresse email' aria-label='Email address' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <Form.Control.Feedback type='invalid'>
                        Veuillez entrer une adresse email valide.
                      </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md='auto' className='mt-1 d-flex justify-content-end p-1'>
                  <Button variant='primary' type='submit' className='w-md-auto w-100'>S'inscrire</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="border-top py-3 mt-4 align-items-center">
          <Col xs={12} sm className="text-center text-sm-start mb-2 mb-sm-0">
            <p className="mb-0">&copy; 2024 Viraj H2. Tous droits réservés.</p>
          </Col>
          <Col xs={12} sm="auto" className="text-center text-sm-end">
            <a href="https://www.linkedin.com/company/viraj-h2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
