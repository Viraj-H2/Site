import { Navbar as Bnavbar, Container, Nav } from 'react-bootstrap';
import { isProduction } from '../config/config';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Bnavbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Container fluid>
        <Bnavbar.Brand as={Link} to='/'>
        <img src='/favicon.svg' className='img-fluid' style={{ maxHeight: '40px' }} />
        </Bnavbar.Brand>
        <Bnavbar.Toggle aria-controls='basic-navbar-nav' />
        <Bnavbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {!isProduction && <Nav.Link as={Link} to='/theme'>Debug Theme</Nav.Link>}
            {!isProduction && <Nav.Link as={Link} to='/layout'>Debug Layout</Nav.Link>}
          </Nav>
        </Bnavbar.Collapse>
      </Container>
    </Bnavbar>
  )
}
