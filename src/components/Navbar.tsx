import { Navbar as Bnavbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Bnavbar {...(isHomePage ? { fixed: 'top' } : { sticky: 'top' })} expand='sm' bg='body'>
      <Container fluid>
        <Bnavbar.Brand as={Link} to='/'>
          <img src='/assets/images/favicon.svg' style={{ maxHeight: '40px' }} />
        </Bnavbar.Brand>
        <Bnavbar.Toggle />
        <Bnavbar.Collapse className='justify-content-end'>
          <Nav>
            <NavDropdown title='À propos'>
              <NavDropdown.Item href='/about#team'>L'équipe</NavDropdown.Item>
              <NavDropdown.Item href='/about#sponsors'>Soutiens</NavDropdown.Item>
              <NavDropdown.Item href='/about#newsletter'>Newsletter</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/concept'>Notre concept</Nav.Link>
            <Nav.Link as={Link} to='/careers'>Carrières</Nav.Link>
            <Nav.Link as={Link} to='/news'>Actualités</Nav.Link>
            <NavDropdown title='🇫🇷'>
              <NavDropdown.Item href='#action/en'>🇬🇧</NavDropdown.Item>
              <NavDropdown.Item href='#action/fr'>🇫🇷</NavDropdown.Item>
            </NavDropdown>
            <Button href='mailto:contact@viraj-h2.com?subject=Demande%20de%20contact' variant='outline-primary'>Nous contacter</Button>
          </Nav>
        </Bnavbar.Collapse>
      </Container>
    </Bnavbar>
  );
}
