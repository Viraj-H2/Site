import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ContactEmail from '../../common/components/ContactEmail';

export default function Footer() {
  const links = [
    { to: '/', text: 'Accueil' },
    { to: '/concept', text: 'Notre concept' },
    { to: '/team', text: "L'équipe" },
    { to: '/careers', text: 'Carrières' },
    { to: '/blog', text: 'Blog' }
  ];

  return (
    <footer>
      <Container fluid className='p-4 border-top'>
        <Row className='m-2 justify-content-between'>
          <Col lg={6} className='mb-3'>
            <h5 className='text-uppercase mb-3'>Coordonnées</h5>
            <Row className='mb-2'>
              <Col xs='auto' className='pe-2'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Col>
              <Col>
                <address className='mb-0'>
                  <b>Viraj H2</b><br />
                  10 Avenue Edouard Belin<br />
                  31400 Toulouse<br />
                  France
                </address>
              </Col>
            </Row>
            <Row>
              <Col xs='auto' className='pe-2'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Col>
              <Col>
                <ContactEmail />
              </Col>
            </Row>
          </Col>

          <Col lg={4}>
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
        </Row>

        <Row className="border-top py-3 m-4 align-items-center">
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
