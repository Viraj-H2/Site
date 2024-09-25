import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as Bnavbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext';
import capitalize from '../../utils/capitalize';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Bnavbar {...(isHomePage ? { fixed: 'top' } : { sticky: 'top' })} expand='sm' bg='body'>
      <Container fluid>
        <Bnavbar.Brand as={Link} to='/'>
          <img src='/assets/icons/favicon.svg' style={{ maxHeight: '40px' }} />
        </Bnavbar.Brand>
        <Bnavbar.Toggle />
        <Bnavbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to='/'>Accueil</Nav.Link>
            <Nav.Link as={Link} to='/concept'>Notre concept</Nav.Link>
            <Nav.Link as={Link} to='/team'>L'équipe</Nav.Link>
            <Nav.Link as={Link} to='/careers'>Carrières</Nav.Link>
            <Nav.Link as={Link} to='/press'>Presse</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <NavDropdown title='🇫🇷'>
              <NavDropdown.Item href='#action/en'>🇬🇧</NavDropdown.Item>
              <NavDropdown.Item href='#action/fr'>🇫🇷</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={capitalize(theme)}>
              <NavDropdown.Item onClick={() => setTheme('light')}>Light</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('dark')}>Dark</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme('auto')}>Auto</NavDropdown.Item>
            </NavDropdown>
            <Button href='mailto:contact@viraj-h2.com?subject=Demande%20de%20contact' variant='outline-primary'>Nous contacter</Button>
          </Nav>
        </Bnavbar.Collapse>
      </Container>
    </Bnavbar>
  );
}
